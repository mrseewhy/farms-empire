import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
import { t as Stagger } from "./Stagger-7mlWtPLa.js";
//#region src/routes/_public/our-solution.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function OurSolutionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				title: "Our Solution",
				subtitle: "End-to-end agricultural solutions from expert consultancy and farm design to community mobilization and return-on-investment delivery."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-3xl prose prose-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead text-xl text-muted-foreground",
								children: "Africa loses billions of dollars in agricultural potential every year, not because the land is absent; but because the systems, expertise, and community coordination needed to activate it are missing. The result: landowners earn nothing from their assets, communities go hungry, and Africa's agricultural promise remains largely unrealized."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-semibold text-primary",
								children: "Farms Empire changes that."
							})]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, {
						direction: "up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold text-foreground",
							children: "Our Model: The Communal Farming Partnership"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl text-lg text-muted-foreground",
							children: "Our unique Communal Farming Partnership Model brings together four essential elements that no single stakeholder could achieve alone:"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 100,
						className: "mt-10 grid gap-6 sm:grid-cols-2",
						children: [
							{
								element: "Land",
								contributor: "Landowners & Property Investors",
								what: "Undeveloped or idle arable land activated under structured agreement"
							},
							{
								element: "Community",
								contributor: "Local Farming Communities",
								what: "Labour, local knowledge, community trust, and shared stake in outcomes"
							},
							{
								element: "Expertise",
								contributor: "Farms Empire Technical Team",
								what: "Agronomy, farm design, crop management, and commercial operations"
							},
							{
								element: "Market Access",
								contributor: "Farms Empire Commercial Division",
								what: "Offtaker relationships, value chain links, retail and export channels"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors",
									children: item.element
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium text-muted-foreground",
									children: item.contributor
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: item.what
								})
							]
						}, item.element))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold text-foreground",
							children: "Our Services"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 80,
						className: "mt-10 grid gap-6 md:grid-cols-2",
						children: [
							{
								num: "1",
								title: "Agricultural Consultancy",
								desc: "Expert advisory services for individual farmers, cooperatives, agribusinesses, and government agencies seeking to optimize agricultural productivity and enterprise sustainability."
							},
							{
								num: "2",
								title: "Farm Design and Setup",
								desc: "End-to-end farm establishment, from soil testing and crop selection to infrastructure setup, irrigation design, and operational planning."
							},
							{
								num: "3",
								title: "Communal Farm Management",
								desc: "We actively manage farms on behalf of our landowner and community partners: handling all operational, technical, and commercial activities while delivering agreed returns."
							},
							{
								num: "4",
								title: "Community Mobilization and Cooperative Development",
								desc: "We identify, train, and organize farming communities into productive cooperative units with clear governance, defined roles, and shared accountability structures."
							},
							{
								num: "5",
								title: "Agricultural Training and Capacity Building",
								desc: "We equip community farmers with practical skills in modern farming techniques, post-harvest handling, cooperative management, and agricultural business fundamentals."
							},
							{
								num: "6",
								title: "Investor Engagement and Land Asset Optimization",
								desc: "For landowners and property investors, we provide structured agricultural partnerships that generate consistent income from land awaiting development."
							}
						].map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground",
								children: service.num
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-foreground group-hover:text-primary transition-colors",
								children: service.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: service.desc
							})] })]
						}, service.num))
					})]
				})
			})
		]
	});
}
//#endregion
export { OurSolutionPage as component };
