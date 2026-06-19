import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as siteConfig } from "./config-B_JLTQPd.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
//#region src/routes/_public/publications.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
var publications = [
	{
		num: "1",
		title: "Communities as Agricultural Enterprises",
		subtitle: "A Framework for Communal Farming in Sub-Saharan Africa",
		series: "Farms Empire Research Series | 2023",
		desc: "A comprehensive framework examining how community-level agricultural enterprises can be structured, governed, and sustained for long-term productivity and social impact. Drawing from Farms Empire's operational experience and a review of successful communal farming models across Sub-Saharan Africa, this paper presents a replicable model for community agricultural enterprise development."
	},
	{
		num: "2",
		title: "Idle Land, Active Returns",
		subtitle: "Making the Case for Agricultural Land Partnerships in Nigeria",
		series: "Farms Empire Policy Brief | 2023",
		desc: "With millions of hectares of agricultural land lying undeveloped across Nigeria, this policy brief makes the economic, social, and environmental case for structured land partnership programs that activate idle land while generating income for landowners and food security for communities."
	},
	{
		num: "3",
		title: "Women at the Centre",
		subtitle: "Gender-Inclusive Communal Farming and Its Impact on Household Food Security",
		series: "Farms Empire Impact Report | 2023",
		desc: "Drawing from Farms Empire's Women's Agricultural Cooperative Development Programme, this impact report documents the transformative effect of gender-inclusive communal farming on household food security, women's economic empowerment, and cooperative sustainability."
	},
	{
		num: "4",
		title: "Africa's $350 Billion Opportunity",
		subtitle: "Closing the Agricultural Investment Gap to Achieve SDG 2",
		series: "Farms Empire Thought Leadership Paper | 2024",
		desc: "A data-driven examination of Africa's agricultural investment gap and a practical framework for mobilizing the private sector, development finance institutions, and community capital to close it, with a specific focus on communal farming as a scalable, high-impact investment vehicle."
	},
	{
		num: "5",
		title: "From Field to Table",
		subtitle: "Building Agricultural Value Chains That Serve Communities First",
		series: "Farms Empire Practitioner Guide | 2024",
		desc: "A practical guide for agricultural practitioners, cooperative managers, and community development workers on building agricultural value chains that maximize returns to smallholder farmers, from crop selection and post-harvest handling to market access and pricing negotiation."
	}
];
function PublicationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				title: "Publications",
				subtitle: "Insights, Research & Knowledge from the Field."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-3xl text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-relaxed text-muted-foreground",
								children: "Farms Empire is not only a practitioner of sustainable communal agriculture, we are a thought leader in Africa's agricultural development space. Our publications bring together field research, policy analysis, community impact documentation, and practical guides to advance the knowledge base of African agriculture."
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
							className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
							children: "Featured Publications"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-6",
						children: publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "up",
							delay: index * 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 sm:p-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground",
										children: pub.num
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors",
											children: pub.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-medium text-primary",
											children: pub.subtitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: pub.series
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted-foreground",
											children: pub.desc
										})
									] })]
								})
							})
						}, pub.num))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
									children: "Stay Informed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg leading-relaxed text-muted-foreground",
									children: "Subscribe to the Farms Empire Knowledge Hub to receive our latest publications, field reports, impact updates, and agricultural insights directly to your inbox."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg leading-relaxed text-muted-foreground",
									children: "We also welcome contributions from researchers, agricultural practitioners, policy experts, and community development professionals."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: [
										"To submit a contribution proposal, contact:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${siteConfig.contact.email.media}`,
											className: "text-primary hover:underline",
											children: siteConfig.contact.email.media
										})
									]
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/about.jpg",
									alt: "Farms Empire publications",
									className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
								})
							}) })
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { PublicationsPage as component };
