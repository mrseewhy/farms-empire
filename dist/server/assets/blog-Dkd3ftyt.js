import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as Link } from "./link-DeGtLGkj.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as blogPosts } from "./blog-data-wXDbbDPE.js";
import { t as Stagger } from "./Stagger-7mlWtPLa.js";
//#region src/routes/_public/blog/index.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Blog",
			subtitle: "Stories, insights, and knowledge from the field."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-white py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					staggerDelay: 100,
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: blogPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$postId",
						params: { postId: post.id },
						className: "group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.img,
								alt: post.title,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
									children: post.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground",
									children: post.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-4 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.date }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-muted-foreground" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.readTime })
									]
								})
							]
						})]
					}, post.id))
				})
			})
		})]
	});
}
//#endregion
export { BlogPage as component };
