import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import config from "../prerender.config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

interface RouteConfig {
  path: string;
  priority: string;
  meta: {
    title: string;
    description: string;
  };
}

async function prerender(): Promise<void> {
  console.log("Starting prerender (meta injection)...");

  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("dist/index.html not found. Run `vite build` first.");
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  const routes: RouteConfig[] = [...(config.routes as RouteConfig[])];

  if (config.fetchDynamicRoutes) {
    const dynamicRoutes: RouteConfig[] = await config.fetchDynamicRoutes();
    routes.push(...dynamicRoutes);
    console.log(`Found ${dynamicRoutes.length} dynamic routes`);
  }

  console.log(`Prerendering ${routes.length} routes...`);

  for (const route of routes) {
    try {
      const html = injectMeta(template, route, config.siteUrl);

      const outputPath = route.path === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route.path, "index.html");

      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputPath, html, "utf-8");
      console.log(`✓ ${route.path}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`✗ ${route.path}: ${message}`);
    }
  }

  generateSitemap(routes, config.siteUrl);

  console.log("Prerender complete!");
}

function injectMeta(template: string, route: RouteConfig, siteUrl: string): string {
  const { path: routePath, meta } = route;
  const fullUrl = `${siteUrl}${routePath}`;
  const ogImage = `${siteUrl}/images/farmsempire-card.jpg`;

  let html = template;

  html = html.replace(
    /<title>.*?<\/title>/s,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  if (html.match(/<meta\s+name="description"[^>]*>/i)) {
    html = html.replace(
      /<meta\s+name="description"[^>]*>/i,
      `<meta name="description" content="${escapeHtml(meta.description)}">`
    );
  } else {
    html = html.replace("</head>", `<meta name="description" content="${escapeHtml(meta.description)}">\n</head>`);
  }

  if (html.match(/<link\s+rel="canonical"[^>]*>/i)) {
    html = html.replace(
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${fullUrl}">`
    );
  } else {
    html = html.replace("</head>", `<link rel="canonical" href="${fullUrl}">\n</head>`);
  }

  const ogTags = `
    <meta property="og:type" content="website">
    <meta property="og:url" content="${fullUrl}">
    <meta property="og:title" content="${escapeHtml(meta.title)}">
    <meta property="og:description" content="${escapeHtml(meta.description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Farms Empire">`;

  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");

  const twitterTags = `
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${fullUrl}">
    <meta name="twitter:title" content="${escapeHtml(meta.title)}">
    <meta name="twitter:description" content="${escapeHtml(meta.description)}">
    <meta name="twitter:image" content="${ogImage}">`;

  html = html.replace("</head>", `${ogTags}\n${twitterTags}\n</head>`);

  return html;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateSitemap(routes: RouteConfig[], siteUrl: string): void {
  const today = new Date().toISOString().split("T")[0];

  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const sitemapPath = path.join(distDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap, "utf-8");
  console.log(`Generated sitemap with ${routes.length} routes`);
}

prerender().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error("Prerender failed:", message);
  process.exit(1);
});
