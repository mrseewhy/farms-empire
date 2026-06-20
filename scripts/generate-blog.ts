import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");
const outputFile = path.join(process.cwd(), "src/lib/blog-data.ts");
const sitemapFile = path.join(process.cwd(), "public/sitemap-blog.xml");

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  img: string;
  author: string;
  content: string;
}

function generateBlogData() {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts: BlogPost[] = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const id = file.replace(".mdx", "");

    return {
      id,
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      date: data.date || "",
      category: data.category || "General",
      readTime: data.readTime || "5 min read",
      img: data.img || "/images/about.jpg",
      author: data.author || "Farms Empire",
      content: content.trim(),
    };
  });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Generate blog data file
  const output = `export const blogPosts = ${JSON.stringify(posts, null, 2)};
`;
  fs.writeFileSync(outputFile, output, "utf-8");
  console.log(`Generated blog data from ${posts.length} posts.`);

  // Generate blog sitemap
  const sitemapPosts = posts
    .map(
      (post) => `  <url>
    <loc>https://farmsempire.africa/blog/${post.id}</loc>
    <lastmod>${new Date(post.date).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPosts}
</urlset>
`;

  fs.writeFileSync(sitemapFile, sitemap, "utf-8");
  console.log(`Generated blog sitemap with ${posts.length} posts.`);
}

generateBlogData();
