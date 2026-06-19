import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
import { t as Stagger } from "./Stagger-7mlWtPLa.js";
//#region src/routes/_public/who-we-are.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function WhoWeArePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				title: "Who We Are",
				subtitle: "A purpose-driven agricultural company uniting landowners, communities, and expert practitioners to build sustainable farming enterprises across Africa."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "prose prose-lg max-w-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Farms Empire and Agricultural Services is a purpose-driven agricultural solutions company uniting landowners, communities, and expert practitioners to build sustainable farming enterprises that feed Africa and create lasting income for partners." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The organization is founded on a simple but powerful conviction: \"With so much undeveloped land across Africa, no one should go hungry; and no land should go to waste!\"" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Across Africa, millions of hectares of arable land lie undeveloped, not because the land lacks potential, but because many landowners believe land is only meant for buildings and physical structures. At the same time, the continent faces rising food insecurity, unemployment, and economic fragility." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We exist at the intersection of these two realities, to bridge the gap between untapped land and untapped human potential through the power of communal agriculture." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Registered and headquartered in Nigeria, but with operations across Africa, Farms Empire brings together landowners, local communities, agricultural experts, and strategic partners to co-create thriving farming enterprises. Our model is built on shared ownership, shared effort, and shared reward; ensuring that the communities who grow our food are the first to benefit from it." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl font-medium text-primary",
									children: "We are not just a consultancy. We are a movement, one harvest at a time."
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-primary",
									children: "Our Mission"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground",
									children: "To provide smallholder farmers and communities with expert agricultural support, collective resources, and collaborative farming opportunities that drives sustainable growth and wealth creation."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-primary",
									children: "Our Vision"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground",
									children: "To build and support a network of 1,000 thriving farmers and agricultural communities by 2030, strengthening food security and driving sustainable economic development across Africa."
								})]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold text-foreground",
							children: "What We Stand For"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 100,
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								title: "Partnership",
								desc: "We believe no one grows alone. Every farm we build is rooted in relationships, trust, and mutual commitment."
							},
							{
								title: "Integrity",
								desc: "We operate with full transparency in all land agreements, financial arrangements, and community partnerships."
							},
							{
								title: "Community",
								desc: "The communities we serve are not beneficiaries; they are co-owners, co-investors, and co-beneficiaries."
							},
							{
								title: "Sustainability",
								desc: "We farm with the future in mind: environmentally responsible, economically viable, and socially inclusive."
							}
						].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
								children: value.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: value.desc
							})]
						}, value.title))
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
							children: "Our Areas of Expertise"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 80,
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							"Crop cultivation and Animal husbandry",
							"Agricultural business and value chain development",
							"Community engagement and cooperative systems",
							"Financial modelling, partnerships and investor relations",
							"UN Sustainable Development Goals implementation"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-muted-foreground transition-all duration-200 hover:shadow-md hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary",
								children: "✓"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: item
							})]
						}, item))
					})]
				})
			})
		]
	});
}
//#endregion
export { WhoWeArePage as component };
