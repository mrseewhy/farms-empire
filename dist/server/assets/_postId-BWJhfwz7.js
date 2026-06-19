import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as Link } from "./link-DeGtLGkj.js";
import { t as Route } from "./_postId-Bc9l8lae.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
import { t as blogPosts } from "./blog-data-wXDbbDPE.js";
//#region src/routes/_public/blog/$postId.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const { postId } = Route.useParams();
	const post = blogPosts.find((p) => p.id === postId);
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Post Not Found",
			subtitle: "The blog post you are looking for does not exist."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog",
					className: "text-primary hover:underline",
					children: "Back to Blog"
				})
			})
		})]
	});
	const currentIndex = blogPosts.findIndex((p) => p.id === postId);
	const nextPost = blogPosts[currentIndex + 1] || blogPosts[0];
	const prevPost = blogPosts[currentIndex - 1] || blogPosts[blogPosts.length - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				title: post.title,
				subtitle: `${post.category} | ${post.date} | ${post.readTime}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[21/9] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.img,
								alt: post.title,
								className: "h-full w-full object-cover"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "prose prose-lg mt-10 max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-strong:text-foreground",
							dangerouslySetInnerHTML: { __html: post.content }
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$postId",
							params: { postId: prevPost.id },
							className: "group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Previous Article"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors",
								children: prevPost.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$postId",
							params: { postId: nextPost.id },
							className: "group rounded-xl border border-border bg-card p-6 text-right transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Next Article"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors",
								children: nextPost.title
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98]",
							children: "Back to Blog"
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { BlogPostPage as component };
