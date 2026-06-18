import { r as __toESM, t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { G as require_react } from "./react-dom-rYWlLhJU.js";
import { t as Link } from "./link-CjOfzNd9.js";
//#region src/components/LogoCarousel.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var logos = [
	{
		src: "/images/logos/logo1.jpg",
		alt: "Partner 1"
	},
	{
		src: "/images/logos/logo2.jpg",
		alt: "Partner 2"
	},
	{
		src: "/images/logos/logo3.jpg",
		alt: "Partner 3"
	},
	{
		src: "/images/logos/logo4.jpg",
		alt: "Partner 4"
	},
	{
		src: "/images/logos/logo5.jpg",
		alt: "Partner 5"
	},
	{
		src: "/images/logos/logo6.jpg",
		alt: "Partner 6"
	}
];
function LogoCarousel() {
	const scrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		let animId;
		const speed = .5;
		function animate() {
			if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
			el.scrollLeft += speed;
			el.scrollLeft;
			animId = requestAnimationFrame(animate);
		}
		animId = requestAnimationFrame(animate);
		const handleMouseEnter = () => cancelAnimationFrame(animId);
		const handleMouseLeave = () => {
			animId = requestAnimationFrame(animate);
		};
		el.addEventListener("mouseenter", handleMouseEnter);
		el.addEventListener("mouseleave", handleMouseLeave);
		return () => {
			cancelAnimationFrame(animId);
			el.removeEventListener("mouseenter", handleMouseEnter);
			el.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-y border-border/40 bg-white py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/50",
				children: "They Trust Us"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollRef,
			className: "flex gap-12 overflow-hidden",
			style: { maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" },
			children: [...logos, ...logos].map((logo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-16 w-40 shrink-0 items-center justify-center grayscale opacity-40 transition-all hover:grayscale-0 hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo.src,
					alt: logo.alt,
					className: "max-h-full max-w-full object-contain"
				})
			}, `${logo.src}-${i}`))
		})]
	});
}
//#endregion
//#region src/routes/_public/index.tsx?tsr-split=component
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70vh] overflow-hidden bg-primary lg:min-h-[85vh] xl:min-h-[90vh]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
						role: "img",
						"aria-label": "Agricultural farmland showing sustainable farming in Africa",
						style: { backgroundImage: "url('/images/hero.jpg')" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex min-h-[70vh] items-center lg:min-h-[85vh] xl:min-h-[90vh]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent",
										children: "Africa's Leading SDG 2 Organization"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-4 font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl",
										children: [
											"Communities",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Grow ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#00ff00]",
												children: "Empires"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-lg text-lg leading-relaxed text-white/80",
										children: "We partner with individuals, groups, and local communities to build sustainable agricultural powerhouses through expert consultancy, strategic support, and the enduring strength of communal farming."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/partner-with-us",
											className: "inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl",
											children: ["Book a Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/who-we-are",
											className: "inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10",
											children: "Learn More"
										})]
									})
								]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoCarousel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
							children: "Who We Are"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl",
							children: "Building Sustainable Agricultural Powerhouses Across Africa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg leading-relaxed text-muted-foreground",
							children: "At Farms Empire, we believe Communities Grow Empires. We partner with individuals, groups, and local communities to build sustainable agricultural powerhouses through expert consultancy, strategic support, collective resources, and the enduring strength of communal farming, to achieve food security across Africa."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-8 border-l-4 border-primary pl-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg italic text-muted-foreground",
								children: "\"If we want to improve our agricultural sector, we must think of cooperation.\""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-2 text-sm font-medium text-muted-foreground/70",
								children: "— Julius Nyerere, former President of Tanzania"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/who-we-are",
							className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",
							children: ["Read our full story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden rounded-2xl bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
								alt: "Farms Empire communal farming",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-6 -left-6 rounded-xl bg-primary px-6 py-4 text-white shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold",
								children: "500+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/80",
								children: "Hectares Under Management"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-8 md:grid-cols-4",
						children: [
							{
								value: "500+",
								label: "Hectares Managed"
							},
							{
								value: "180+",
								label: "Active Partners"
							},
							{
								value: "500+",
								label: "Farming Families"
							},
							{
								value: "400+",
								label: "Tonnes Produced Yearly"
							}
						].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl font-bold text-white sm:text-4xl",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/70",
								children: stat.label
							})]
						}, stat.label))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-muted p-8 text-center sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
							children: [
								"If you are not earning from your land,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "someone else is!"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
							children: "Your land is sitting idle, but your wealth doesn't have to. Partner with Farms Empire today, put your undeveloped land to work through communal farming, and watch it generate massive returns."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/partner-with-us",
							className: "mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl",
							children: ["Request a Call", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
		]
	});
}
//#endregion
export { HomePage as component };
