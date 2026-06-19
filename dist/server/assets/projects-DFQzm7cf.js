import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as siteConfig } from "./config-B_JLTQPd.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
import { t as Stagger } from "./Stagger-7mlWtPLa.js";
//#region src/routes/_public/projects.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				title: "Our Projects",
				subtitle: "Active communal farming projects across Nigeria and Africa, driving food security and economic empowerment."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/about.jpg",
									alt: "Farms Empire projects across Africa",
									className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
								})
							}) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
								children: "Growing Impact, One Community at a Time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg leading-relaxed text-muted-foreground",
								children: "From pilot farms to multi-community agricultural enterprises, Farms Empire is actively building the infrastructure of food security and economic empowerment across Africa. Here is a window into the work we are doing on the ground."
							})] })
						})]
					})
				})
			}),
			siteConfig.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: index % 2 === 0 ? "bg-muted py-20" : "bg-white py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: index % 2 === 0 ? "left" : "right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: project.title,
									className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
								})
							}) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: index % 2 === 0 ? "right" : "left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
									children: project.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-medium text-primary",
									children: project.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-relaxed text-muted-foreground",
									children: project.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex gap-4",
									children: [
										project.farmSize && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 rounded-xl bg-muted p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Farm Size"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm font-bold text-foreground",
												children: project.farmSize
											})]
										}),
										project.communityPartners && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 rounded-xl bg-muted p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Community Partners"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm font-bold text-foreground",
												children: project.communityPartners
											})]
										}),
										project.crops && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 rounded-xl bg-muted p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Crops"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm font-bold text-foreground",
												children: project.crops
											})]
										}),
										project.participants && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 rounded-xl bg-muted p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Participants"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm font-bold text-foreground",
												children: project.participants
											})]
										}),
										project.totalLand && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 rounded-xl bg-muted p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Total Land"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm font-bold text-foreground",
												children: project.totalLand
											})]
										}),
										project.focus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 rounded-xl bg-muted p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Focus"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm font-bold text-foreground",
												children: project.focus
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold uppercase tracking-wider text-foreground",
										children: "Impact Achieved"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-2",
										children: project.impact.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-sm text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M5 13l4 4L19 7"
												})
											}), item]
										}, item))
									})]
								})
							] })
						})]
					})
				})
			}, project.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
								children: "Our Reach at a Glance"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 100,
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								metric: "States of Operation",
								figure: "4 and growing"
							},
							{
								metric: "Hectares Under Management",
								figure: "500+ hectares"
							},
							{
								metric: "Community Farming Families",
								figure: "500+ families engaged"
							},
							{
								metric: "Land and Investment Partners",
								figure: "180+ active partners"
							},
							{
								metric: "Food Produced Annually",
								figure: "400+ tonnes"
							},
							{
								metric: "Youth Agripreneurs Trained",
								figure: "40+ launched"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold text-primary",
								children: item.figure
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: item.metric
							})]
						}, item.metric))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl italic leading-relaxed text-foreground sm:text-2xl",
								children: "\"Our projects are proof of a principle: when communities own the farm, they own the outcome, and they protect it, grow it, and sustain it beyond any single season.\""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-6 text-sm font-medium text-muted-foreground",
								children: "- Founder/CEO, Farms Empire"
							})]
						})
					})
				})
			})
		]
	});
}
//#endregion
export { ProjectsPage as component };
