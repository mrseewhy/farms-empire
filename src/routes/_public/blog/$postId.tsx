import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../../../components/PageHero";
import { FadeIn } from "../../../components/FadeIn";
import { blogPosts } from "../../../lib/blog-data";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const Route = createFileRoute("/_public/blog/$postId")({
  component: BlogPostPage,
});

function BlogPostPage() {
  const { postId } = Route.useParams();
  const post = blogPosts.find((p) => p.id === postId);

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

  return (
    <main className="min-h-screen">
      <PageHero
        title={post.title}
        subtitle={`${post.category} | ${post.date} | ${post.readTime}`}
      />

      {/* Article */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
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
