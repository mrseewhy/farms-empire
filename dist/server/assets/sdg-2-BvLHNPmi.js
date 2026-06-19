import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
import { t as Stagger } from "./Stagger-7mlWtPLa.js";
//#region src/routes/_public/sdg-2.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function SDG2Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				title: "UN SDG 2",
				subtitle: "Farming our way to Zero Hunger through sustainable communal agriculture, cooperative enterprise, and food systems transformation."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "prose prose-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "lead text-xl text-muted-foreground",
										children: "Farms Empire is Africa's leading community-powered intervention organization working to achieve United Nations Sustainable Development Goal 2: Zero Hunger, through sustainable communal agriculture, cooperative enterprise, and food systems transformation."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What is UN SDG 2?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Adopted by all 193 United Nations Member States as part of the 2030 Agenda for Sustainable Development, SDG 2 calls on the world to:" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "\"End hunger, achieve food security and improved nutrition, and promote sustainable agriculture by 2030.\"" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SDG 2 is not simply about feeding people today, it is about building the agricultural systems, inclusive institutions, and economic structures that make hunger permanently impossible." })
								]
							})
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold text-foreground",
								children: "Africa's Food Security Crisis: The Numbers"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
							staggerDelay: 100,
							className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: [
								{
									stat: "$350B",
									label: "Africa's annual food and agricultural market"
								},
								{
									stat: "40%",
									label: "Increase needed in agricultural production by 2030"
								},
								{
									stat: "$11B/yr",
									label: "Additional investment needed to close the gap"
								},
								{
									stat: "250M+",
									label: "Africans currently classified as food insecure"
								},
								{
									stat: "60%",
									label: "Of the world's uncultivated arable land is in Africa"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-bold text-primary group-hover:scale-105 transition-transform",
									children: item.stat
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: item.label
								})]
							}, item.stat))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "up",
							delay: 300,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-center text-lg font-medium text-foreground",
								children: "The gap between Africa's potential and its food reality is not a resource problem. It is a systems problem."
							})
						})
					]
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
							children: "How Farms Empire Advances SDG 2"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 80,
						className: "mt-10 grid gap-6 md:grid-cols-2",
						children: [
							{
								target: "Target 2.1: End Hunger",
								desc: "Our communal farms increase locally grown food availability in every community we serve"
							},
							{
								target: "Target 2.2: End Malnutrition",
								desc: "Diversified crop production improves nutritional quality and variety across partner communities"
							},
							{
								target: "Target 2.3: Smallholder Productivity",
								desc: "Expert support, shared resources, and market access systematically increase smallholder output and income"
							},
							{
								target: "Target 2.4: Sustainable Agriculture",
								desc: "We integrate soil health, water conservation, IPM, and crop rotation in all farm operations"
							},
							{
								target: "Target 2.a: Rural Investment",
								desc: "We mobilize private capital from landowners and investors into rural agricultural systems"
							},
							{
								target: "Target 2.c: Fair Markets",
								desc: "We build direct market linkages that remove exploitative intermediaries and ensure fair farmer returns"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-foreground group-hover:text-primary transition-colors",
								children: item.target
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: item.desc
							})]
						}, item.target))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary py-20 text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "prose prose-lg max-w-none prose-headings:text-primary-foreground prose-p:text-primary-foreground/80 prose-blockquote:border-primary-foreground/30 prose-blockquote:text-primary-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Our Commitment" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Farms Empire formally aligns all its programs, projects, and partnerships with the United Nations SDG 2 framework. We maintain rigorous impact measurement systems that track our contribution to each SDG 2 target, and we report transparently to our partners, stakeholders, and the communities we serve." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "\"The hunger age will not end because we produce more food; it will end because we build the systems that make hunger impossible.\"" })
								]
							})
						})
					})
				})
			})
		]
	});
}
//#endregion
export { SDG2Page as component };
