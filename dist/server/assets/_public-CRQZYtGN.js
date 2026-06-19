import { r as __toESM, t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as require_react } from "./react-5VzO3yf4.js";
import { t as Link } from "./link-DeGtLGkj.js";
import { t as cn } from "./utils-BcuCXoSn.js";
import { t as siteConfig } from "./config-B_JLTQPd.js";
import { t as FadeIn } from "./FadeIn-BA0I-RIa.js";
import { t as Stagger } from "./Stagger-7mlWtPLa.js";
//#region src/components/LogoCarousel.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var logos = [
	{
		src: "/images/logos/logo-1.jpg",
		alt: "Partner 1"
	},
	{
		src: "/images/logos/logo-2.jpg",
		alt: "Partner 2"
	},
	{
		src: "/images/logos/logo-3.jpg",
		alt: "Partner 3"
	},
	{
		src: "/images/logos/logo-4.jpg",
		alt: "Partner 4"
	},
	{
		src: "/images/logos/logo-5.jpg",
		alt: "Partner 5"
	},
	{
		src: "/images/logos/logo-6.jpg",
		alt: "Partner 6"
	},
	{
		src: "/images/logos/logo-7.jpg",
		alt: "Partner 7"
	},
	{
		src: "/images/logos/logo-8.jpg",
		alt: "Partner 8"
	},
	{
		src: "/images/logos/logo-9.jpg",
		alt: "Partner 9"
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
			if (!el) return;
			if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
			el.scrollLeft += speed;
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
				className: "mb-8 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground",
				children: "They Trust Us"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollRef,
			className: "mx-auto flex max-w-7xl gap-12 overflow-hidden px-4 sm:px-6 lg:px-8",
			style: { maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" },
			children: [...logos, ...logos].map((logo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-16 w-40 shrink-0 items-center justify-center opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105",
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
//#region src/hooks/use-count-up.ts
function useCountUp(end, duration = 5e3) {
	const [count, setCount] = (0, import_react.useState)(0);
	const [hasStarted, setHasStarted] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !hasStarted) setHasStarted(true);
		}, { threshold: .3 });
		observer.observe(el);
		return () => observer.disconnect();
	}, [hasStarted]);
	(0, import_react.useEffect)(() => {
		if (!hasStarted) return;
		let startTime = null;
		let animFrame;
		function animate(timestamp) {
			if (!startTime) startTime = timestamp;
			const elapsed = timestamp - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(Math.floor(eased * end));
			if (progress < 1) animFrame = requestAnimationFrame(animate);
		}
		animFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animFrame);
	}, [
		hasStarted,
		end,
		duration
	]);
	return {
		count,
		ref
	};
}
//#endregion
//#region src/components/StatCounter.tsx
function StatCounter({ end, suffix = "", label, duration = 5e3 }) {
	const { count, ref } = useCountUp(end, duration);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-3xl font-bold text-white sm:text-4xl",
			children: [count, suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-white/70",
			children: label
		})]
	});
}
//#endregion
//#region src/components/ScaleIn.tsx
function ScaleIn({ children, delay = 0, duration = 500, className }) {
	const ref = (0, import_react.useRef)(null);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.unobserve(entry.target);
			}
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn(isVisible ? "animate-scale-in" : "opacity-0", className),
		style: {
			animationDuration: `${duration}ms`,
			animationDelay: `${delay}ms`,
			animationFillMode: "forwards"
		},
		children
	});
}
//#endregion
//#region src/routes/_public/index.tsx?tsr-split=component
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70vh] overflow-hidden bg-primary lg:min-h-screen",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
						role: "img",
						"aria-label": "Agricultural farmland showing sustainable farming in Africa",
						style: { backgroundImage: "url('/images/hero.jpg')" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-br from-black/80 via-black/50 to-black/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 overflow-hidden pointer-events-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[15%] right-[10%] h-32 w-32 rounded-full bg-logo-green/10 blur-3xl animate-[float_8s_ease-in-out_infinite] sm:h-48 sm:w-48 lg:h-64 lg:w-64" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[20%] right-[15%] h-24 w-24 rounded-full bg-accent/10 blur-2xl animate-[float_10s_ease-in-out_infinite_1s] sm:h-36 sm:w-36 lg:h-48 lg:w-48" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[40%] right-[5%] hidden h-32 w-32 rounded-full bg-white/5 blur-xl animate-[float_7s_ease-in-out_infinite_2s] sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[25%] left-[60%] h-10 w-10 rounded-full border border-white/10 animate-[float_6s_ease-in-out_infinite_0.5s] sm:h-16 sm:w-16 lg:h-20 lg:w-20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[30%] left-[70%] h-8 w-8 rounded-full border border-logo-green/20 animate-[float_9s_ease-in-out_infinite_1.5s] sm:h-12 sm:w-12 lg:h-16 lg:w-16" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex min-h-[70vh] items-center lg:min-h-[85vh] xl:min-h-[90vh]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
										direction: "up",
										delay: 100,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-logo-green animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-[0.15em] text-white/90",
												children: "FARMS EMPIRE"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
										direction: "up",
										delay: 200,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]",
											children: [
												"Communities",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Grow",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "relative inline-block",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-logo-green",
														children: "Empires"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
														className: "absolute -bottom-2 left-0 w-full",
														viewBox: "0 0 200 12",
														fill: "none",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															d: "M2 8c30-6 70-6 98-6s68 0 98 6",
															stroke: "#00ff00",
															strokeWidth: "3",
															strokeLinecap: "round",
															opacity: "0.5"
														})
													})]
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
										direction: "up",
										delay: 300,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-xl font-medium leading-relaxed text-white/80 sm:text-2xl",
											children: "Africa's leading United Nations SDG 2 intervention organization against hunger and food insecurity."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
										direction: "up",
										delay: 400,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex flex-wrap gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/partner-with-us",
												className: "group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98]",
												children: ["Book a Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
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
												className: "inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10",
												children: "Learn More"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
										direction: "up",
										delay: 500,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-10 inline-flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex -space-x-2",
													children: [
														"/images/team/a-1.png",
														"/images/team/a-2.png",
														"/images/team/a-3.png",
														"/images/team/a-4.png",
														"/images/team/a-5.png"
													].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src,
														alt: "",
														className: "h-8 w-8 rounded-full border-2 border-white/20 object-cover",
														style: { zIndex: 5 - i }
													}, i))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-px bg-white/25" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex items-center gap-1",
														children: [
															1,
															2,
															3,
															4,
															5
														].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
															className: "h-3.5 w-3.5 fill-accent text-accent",
															viewBox: "0 0 20 20",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
														}, star))
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] text-white/70",
														children: "Trusted by 500+ farming families"
													})]
												})
											]
										})
									})
								]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoCarousel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-wider text-primary",
										children: "Who We Are"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl",
									children: "Building Sustainable Agricultural Powerhouses Across Africa"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg leading-relaxed text-muted-foreground",
									children: "At Farms Empire, we believe Communities Grow Empires. We partner with individuals, groups, and local communities to build sustainable agricultural powerhouses through expert consultancy, strategic support, collective resources, and the enduring strength of communal farming, to achieve food security across Africa."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-8 rounded-r-xl border-l-4 border-accent bg-accent/5 py-4 pr-6 pl-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base italic text-foreground/80",
										children: "\"If we want to improve our agricultural sector, we must think of cooperation.\""
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
										className: "mt-2 text-sm font-medium text-muted-foreground",
										children: "- Julius Nyerere, former President of Tanzania and architect of the 'Ujamaa' (Villagisation/Communal Value and Agriculture) philosophy."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/who-we-are",
										className: "group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]",
										children: ["Read Our Full Story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
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
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "h-5 w-5 text-primary",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 1.5,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Headquartered in Nigeria, operating across Africa" })]
									})]
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/images/about.jpg",
											alt: "Farms Empire communal farming",
											className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute -bottom-4 left-4 rounded-xl bg-primary p-4 text-white shadow-xl shadow-primary/20 sm:-bottom-6 sm:-left-6 sm:p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl font-bold sm:text-3xl",
											children: "500+"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-white/80 sm:text-sm",
											children: "Hectares Under Management"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute right-2 top-6 rounded-xl border border-border bg-card p-3 shadow-xl sm:-right-4 sm:top-8 sm:p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 sm:gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-8 w-8 items-center justify-center rounded-full bg-logo-green/10 sm:h-10 sm:w-10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "h-4 w-4 text-logo-green sm:h-5 sm:w-5",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 2,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M5 13l4 4L19 7"
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-bold text-foreground sm:text-sm",
												children: "SDG 2 Aligned"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground sm:text-xs",
												children: "Zero Hunger Goal"
											})] })]
										})
									})
								]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-8 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleIn, {
								delay: 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
									end: siteConfig.stats.hectaresManaged,
									suffix: "+",
									label: "Hectares Managed"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleIn, {
								delay: 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
									end: siteConfig.stats.activePartners,
									suffix: "+",
									label: "Active Partners"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleIn, {
								delay: 200,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
									end: siteConfig.stats.farmingFamilies,
									suffix: "+",
									label: "Farming Families"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleIn, {
								delay: 300,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
									end: siteConfig.stats.tonnesYearly,
									suffix: "+",
									label: "Tonnes Produced Yearly"
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-wider text-primary",
										children: "Partner Voices"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl",
									children: "What Our Partners Say"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
									children: "Hear from the landowners, communities, and investors who have transformed their agricultural potential with Farms Empire."
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						staggerDelay: 100,
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: siteConfig.testimonials.map((testimonial) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1",
									children: [
										1,
										2,
										3,
										4,
										5
									].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 fill-accent text-accent",
										viewBox: "0 0 20 20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
									}, star))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-base leading-relaxed text-muted-foreground",
									children: [
										"\"",
										testimonial.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: testimonial.img,
										alt: testimonial.name,
										className: "h-12 w-12 rounded-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold text-foreground",
										children: testimonial.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: testimonial.role
									})] })]
								})
							]
						}, testimonial.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/lush.jpg",
									alt: "Our communal farming solution",
									className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
								})
							}) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-wider text-primary",
										children: "Our Solution"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl",
									children: "Turning Idle Land Into Living Enterprises"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg leading-relaxed text-muted-foreground",
									children: "Farms Empire delivers end-to-end agricultural solutions from expert consultancy and farm design to community mobilization, active farm management, and return-on-investment delivery for our partners."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg leading-relaxed text-muted-foreground",
									children: "Africa loses billions of dollars in agricultural potential every year, not because the land is absent; but because the systems, expertise, and community coordination needed to activate it are missing. The result: landowners earn nothing from their assets, communities go hungry, and Africa's agricultural promise remains largely unrealized."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg leading-relaxed text-muted-foreground",
									children: "Farms Empire changes that!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/our-solution",
									className: "group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]",
									children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
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
							] })
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-wider text-primary",
											children: "What We Do"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl",
										children: "Our Services"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
										children: "Our services span the entire agricultural value chain, from initial consultancy and farm design to active management and commercial market delivery."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
							staggerDelay: 100,
							className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
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
											className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground",
											children: service.desc
										})
									]
								})]
							}, service.num))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/our-solution",
									className: "group inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98]",
									children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
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
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						direction: "up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-12 lg:grid-cols-2 lg:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/land.jpg",
										alt: "Partner with Farms Empire",
										className: "h-full w-full object-cover"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center lg:text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl",
										children: "If You Are Not Earning From Your Land, Someone Else Is!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-lg leading-relaxed text-white/75",
										children: "Your land may be sitting idle, but your wealth does not have to. Partner with Farms Empire today, put your undeveloped land to work through communal farming, and watch it generate massive returns while you wait for development. Don't let your greatest asset sleep, let it grow."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap justify-center gap-4 lg:justify-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/partner-with-us",
											className: "group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
											children: ["Partner With Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
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
											to: "/contact",
											className: "inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10",
											children: "Contact Us"
										})]
									})
								]
							})]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-wider text-primary",
											children: "Our Impact"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl",
										children: "Our Projects"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
										children: "Active communal farming projects across Nigeria and Africa, driving food security and economic empowerment."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
							staggerDelay: 100,
							className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: siteConfig.projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[16/9] overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: project.image,
										alt: project.title,
										className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-4 top-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center rounded-full bg-logo-green/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm",
											children: project.status
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors",
											children: project.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs font-medium text-primary",
											children: project.location
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground",
											children: project.description
										})
									]
								})]
							}, project.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/projects",
									className: "group inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98]",
									children: ["View All Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
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
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/contact.jpg",
										alt: "Contact Farms Empire",
										className: "h-full w-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-6 -left-6 rounded-xl bg-primary p-5 text-white shadow-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl font-bold",
										children: "24/7"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/70",
										children: "We're Always Available"
									})]
								})]
							}) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							direction: "right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-wider text-primary",
										children: "Get in Touch"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl",
									children: "Let's Grow Something Together"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg leading-relaxed text-muted-foreground",
									children: "Whether you are a landowner ready to activate your asset, a community seeking agricultural partnership, an investor exploring impact opportunities, or a development agency looking for a field-proven implementation partner, the conversation starts here."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "h-5 w-5 text-primary",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 1.5,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
													})
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-muted-foreground",
												children: "Call Us"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-foreground",
												children: siteConfig.contact.phone
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "h-5 w-5 text-primary",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													strokeWidth: 1.5,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
													})
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-muted-foreground",
												children: "Email Us"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-foreground",
												children: siteConfig.contact.email.general
											})] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "h-5 w-5 text-primary",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 1.5,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-muted-foreground",
											children: "Branch Offices"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-foreground",
											children: siteConfig.contact.address.offices.join(", ")
										})] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex items-center gap-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
										children: ["Send Us a Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
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
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Follow us"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-3",
										children: [
											{
												icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
												url: siteConfig.social.twitter
											},
											{
												icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
												url: siteConfig.social.instagram
											},
											{
												icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
												url: siteConfig.social.linkedin
											},
											{
												icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
												url: siteConfig.social.youtube
											}
										].map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: social.url,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "h-4 w-4",
												fill: "currentColor",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: social.icon })
											})
										}, social.url))
									})]
								})
							] })
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { HomePage as component };
