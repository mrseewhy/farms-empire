import { createFileRoute, Link } from "@tanstack/react-router";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { PageHero } from "../../../components/PageHero";
import { FadeIn } from "../../../components/FadeIn";
import { blogPosts } from "../../../lib/blog-data";
import { siteConfig } from "../../../lib/config";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const Route = createFileRoute("/_public/blog/$postId")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.id === params.postId);
    if (!post) return { meta: [], links: [] };

    const postUrl = `${siteConfig.url}/blog/${post.id}`;
    const postImage = post.img.startsWith("http") ? post.img : `${siteConfig.url}${post.img}`;

    return {
      meta: [
        { title: `${post.title} | Farms Empire` },
        { name: "description", content: post.excerpt },
        { name: "author", content: post.author },
        { name: "robots", content: "index, follow" },

        // Open Graph
        { property: "og:type", content: "article" },
        { property: "og:url", content: postUrl },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: postImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:site_name", content: siteConfig.name },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: postUrl },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: postImage },
      ],
      links: [
        { rel: "canonical", href: postUrl },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { postId } = Route.useParams();
  const post = blogPosts.find((p) => p.id === postId);

  useDocumentTitle(post ? `${post.title} | Farms Empire` : "Blog | Farms Empire");

  if (!post) {
    return (
      <main className="min-h-screen">
        <PageHero
          title="Post Not Found"
          subtitle="The blog post you are looking for does not exist."
        />
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Link to="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.id === postId);
  const nextPost = blogPosts[currentIndex + 1] || blogPosts[0];
  const prevPost =
    blogPosts[currentIndex - 1] || blogPosts[blogPosts.length - 1];

  const postUrl = `${siteConfig.url}/blog/${post.id}`;
  const postImage = post.img.startsWith("http") ? post.img : `${siteConfig.url}${post.img}`;

  return (
    <main className="min-h-screen">
      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: postImage,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/images/logo-nobg.png`,
              },
            },
            datePublished: new Date(post.date).toISOString().split("T")[0],
            dateModified: new Date(post.date).toISOString().split("T")[0],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": postUrl,
            },
          }),
        }}
      />

      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteConfig.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${siteConfig.url}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: postUrl,
              },
            ],
          }),
        }}
      />

      <PageHero
        title={post.title}
        subtitle={`${post.category} | ${post.date} | ${post.readTime}`}
      />

      {/* Article */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
              <img
                src={post.img}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          {post.author && (
            <FadeIn direction="up" delay={50}>
              <p className="mt-6 text-sm text-muted-foreground">
                By <span className="font-semibold text-foreground">{post.author}</span>
              </p>
            </FadeIn>
          )}

          <FadeIn direction="up" delay={100}>
            <article className="prose prose-lg mt-6 max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-table:text-sm prose-th:text-left prose-td:py-2 prose-td:pr-4">
              <Markdown rehypePlugins={[rehypeRaw]}>{post.content}</Markdown>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-muted py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              to="/blog/$postId"
              params={{ postId: prevPost.id }}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Previous Article
              </p>
              <p className="mt-2 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {prevPost.title}
              </p>
            </Link>
            <Link
              to="/blog/$postId"
              params={{ postId: nextPost.id }}
              className="group rounded-xl border border-border bg-card p-6 text-right transition-all duration-300 hover:shadow-lg hover:border-primary/20"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Next Article
              </p>
              <p className="mt-2 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {nextPost.title}
              </p>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98]"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
