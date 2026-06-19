import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as Link } from "./link-DeGtLGkj.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
import { t as Stagger } from "./Stagger-7mlWtPLa.js";
//#region src/routes/_public/partner-with-us.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function PartnerWithUsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				title: "Partner With Us",
				subtitle: "Your land, our expertise, one harvest. Turn idle land into a productive, income-generating agricultural asset with zero operational burden."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-3xl prose prose-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead text-xl text-muted-foreground",
								children: "If you are not earning from your land, someone else is. Your land may be sitting idle, but your wealth does not have to. Partner with Farms Empire today, put your undeveloped land to work through communal farming, and watch it generate massive returns while you wait for development."
							})
						})
					})
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
							children: "Who Should Partner With Us?"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 100,
						className: "mt-10 grid gap-6 md:grid-cols-2",
						children: [
							{
								title: "Landowners and Property Investors",
								desc: "You own land in Nigeria or across Africa. It may be awaiting development, caught in planning processes, or simply lying idle. Farms Empire will partner with you to activate your land through our communal farming model; managing everything from farm design and community mobilization to harvest operations and commercial sales.",
								benefits: [
									"A legally structured land use agreement with clear terms and return structures",
									"Zero operational burden; Farms Empire manages all farm operations end to end",
									"Regular farm performance reports and open site visit access",
									"A share of commercial revenues from every harvest cycle",
									"Enhanced land value through active agricultural development",
									"Full financial transparency and accountability"
								]
							},
							{
								title: "Communities and Farming Groups",
								desc: "Your community has people, local knowledge, and a desire for economic independence. Farms Empire brings the land access, expert management, cooperative structure, and market linkages that transform community farming potential into commercial agricultural enterprise.",
								benefits: [
									"Structured income from communal agricultural activity",
									"Training in modern, productive farming techniques",
									"Cooperative governance structures that protect community interests",
									"Access to institutional markets and fair commercial pricing",
									"Food security for community members"
								]
							},
							{
								title: "Impact Investors and Development Finance Partners",
								desc: "Agriculture is Africa's most impactful investment, generating returns in financial yield, food security, employment, community resilience, and SDG alignment simultaneously.",
								benefits: []
							},
							{
								title: "Government and Development Agencies",
								desc: "Partner with Farms Empire to design and deliver community agricultural development programs that create measurable impact at scale.",
								benefits: []
							}
						].map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
									children: partner.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: partner.desc
								}),
								partner.benefits.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2",
									children: partner.benefits.map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-primary",
											children: "✓"
										}), benefit]
									}, benefit))
								})
							]
						}, partner.title))
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
							children: "How the Partnership Works"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 80,
						className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								step: "1",
								title: "Initial Consultation",
								desc: "Contact us to discuss your land, community, or investment interest. We assess your situation and identify the best partnership model for you."
							},
							{
								step: "2",
								title: "Due Diligence and Agreement",
								desc: "We conduct a site assessment and structure a legally binding partnership agreement protecting all parties with clearly defined returns and responsibilities."
							},
							{
								step: "3",
								title: "Farm Activation",
								desc: "Our team designs and establishes the farm, mobilizing community partners, setting up infrastructure, and beginning the first production cycle."
							},
							{
								step: "4",
								title: "Active Management",
								desc: "We manage all farm operations with regular reporting on productivity, financials, and impact metrics delivered to all partners."
							},
							{
								step: "5",
								title: "Harvest and Returns",
								desc: "At every harvest, commercial revenues are distributed to all partners per the agreement. You earn your return. The community earns its income."
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground",
									children: item.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-semibold text-foreground group-hover:text-primary transition-colors",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: item.desc
								})
							]
						}, item.step))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary py-20 text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, {
						direction: "up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold",
								children: "Book a Free Consultation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80",
								children: "The harvest does not wait. Neither should you. Let's discuss how we can turn your idle land into a productive, income-generating asset."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
								children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "h-4 w-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M17 8l4 4m0 0l-4 4m4-4H3"
									})
								})]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { PartnerWithUsPage as component };
