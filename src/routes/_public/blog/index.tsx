import { createFileRoute, Link } from "@tanstack/react-router";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { PageHero } from "../../../components/PageHero";
import { Stagger } from "../../../components/Stagger";
import { blogPosts } from "../../../lib/blog-data";
import { siteConfig } from "../../../lib/config";

export const Route = createFileRoute("/_public/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Farms Empire" },
      { name: "description", content: "Stories and insights from the field of communal agriculture." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/blog` },
      { property: "og:title", content: "Blog | Farms Empire" },
      { property: "og:description", content: "Stories and insights from the field of communal agriculture." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog | Farms Empire" },
      { name: "twitter:description", content: "Stories and insights from the field of communal agriculture." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/blog` },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  useDocumentTitle("Blog | Farms Empire");
  return (
    <main className="min-h-screen">
      <PageHero
        title="Blog"
        subtitle="Stories and insights from the field of communal agriculture."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger staggerDelay={100} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to="/blog/$postId"
                params={{ postId: post.id }}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
