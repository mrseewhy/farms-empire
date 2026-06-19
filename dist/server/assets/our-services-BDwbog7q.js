import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as siteConfig } from "./config-B_JLTQPd.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
import { t as Stagger } from "./Stagger-7mlWtPLa.js";
//#region src/routes/_public/our-services.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function OurServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				title: "Our Services",
				subtitle: "End-to-end agricultural solutions from consultancy and farm design to active management and market delivery."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 100,
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: siteConfig.services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[16/9] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: service.image,
									alt: service.title,
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-primary",
										children: service.num
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors",
										children: service.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: service.desc
									})
								]
							})]
						}, service.num))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
								children: "Why Choose Farms Empire"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
								children: "We bring proven expertise, transparent partnerships, and measurable results to every engagement."
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 100,
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								title: "Field-Tested Expertise",
								desc: "Our model is built on years of direct, hands-on agricultural experience across diverse African terrains and communities."
							},
							{
								title: "Transparent Partnerships",
								desc: "Every agreement is clear, every return is documented, and every partner has full visibility into farm operations."
							},
							{
								title: "Community-First Approach",
								desc: "Communities are not just labor, they are co-owners and co-beneficiaries, ensuring long-term sustainability."
							},
							{
								title: "Zero Operational Burden",
								desc: "We handle everything from farm design to market delivery, so landowners and investors earn without managing."
							},
							{
								title: "SDG 2 Aligned",
								desc: "Every project directly contributes to the United Nations Sustainable Development Goal of Zero Hunger."
							},
							{
								title: "Scalable Model",
								desc: "Our communal farming framework is replicable across communities, states, and countries throughout Africa."
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: item.desc
							})]
						}, item.title))
					})]
				})
			})
		]
	});
}
//#endregion
export { OurServicesPage as component };
