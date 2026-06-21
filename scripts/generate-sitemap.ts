import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");
const outputFile = path.join(process.cwd(), "public/sitemap.xml");

const staticPages = [
  { loc: "https://farmsempire.com/", priority: "1.0", changefreq: "weekly" },
  { loc: "https://farmsempire.com/who-we-are", priority: "0.8", changefreq: "monthly" },
  { loc: "https://farmsempire.com/our-story", priority: "0.8", changefreq: "monthly" },
  { loc: "https://farmsempire.com/our-solution", priority: "0.8", changefreq: "monthly" },
  { loc: "https://farmsempire.com/our-services", priority: "0.8", changefreq: "monthly" },
  { loc: "https://farmsempire.com/why-ujamaa", priority: "0.7", changefreq: "monthly" },
  { loc: "https://farmsempire.com/sdg-2", priority: "0.7", changefreq: "monthly" },
  { loc: "https://farmsempire.com/partner-with-us", priority: "0.9", changefreq: "monthly" },
  { loc: "https://farmsempire.com/projects", priority: "0.8", changefreq: "monthly" },
  { loc: "https://farmsempire.com/publications", priority: "0.6", changefreq: "monthly" },
  { loc: "https://farmsempire.com/blog", priority: "0.7", changefreq: "weekly" },
  { loc: "https://farmsempire.com/faqs", priority: "0.5", changefreq: "monthly" },
  { loc: "https://farmsempire.com/contact", priority: "0.7", changefreq: "monthly" },
  { loc: "https://farmsempire.com/privacy-policy", priority: "0.3", changefreq: "yearly" },
];

function generateSitemap() {
  // Read blog posts
  let blogPosts: { id: string; date: string }[] = [];
  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
    blogPosts = files.map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        id: file.replace(".mdx", ""),
        date: data.date || new Date().toISOString().split("T")[0],
      };
    });
    blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  const today = new Date().toISOString().split("T")[0];

  const urls = staticPages
    .map(
      (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n");

  const blogUrls = blogPosts
    .map(
      (post) => `  <url>
    <loc>https://farmsempire.com/blog/${post.id}</loc>
    <lastmod>${new Date(post.date).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${blogUrls}
</urlset>
`;

  fs.writeFileSync(outputFile, sitemap, "utf-8");
  console.log(`Generated sitemap with ${staticPages.length} static pages and ${blogPosts.length} blog posts.`);
}

generateSitemap();
