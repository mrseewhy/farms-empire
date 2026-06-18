import { r as __toESM, t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { G as require_react } from "./react-dom-rYWlLhJU.js";
import { n as Outlet } from "./Match-phO_QKlf.js";
import { t as Link } from "./link-CjOfzNd9.js";
import { t as cn } from "./utils-BcuCXoSn.js";
//#region src/components/DropdownMenu.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function DropdownMenu({ label, items, className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(e) {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("relative", className),
		onMouseEnter: () => setOpen(true),
		onMouseLeave: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "flex items-center gap-1.5 rounded-md px-3 py-2 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: cn("h-4 w-4 transition-transform duration-200", open && "rotate-180 text-primary"),
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				strokeWidth: 2.5,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M19 9l-7 7-7-7"
				})
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dropdown-animate-in absolute left-0 top-full z-50 mt-1 min-w-[260px] overflow-hidden rounded-xl border border-border/50 bg-card py-2 shadow-xl",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.href,
				onClick: () => setOpen(false),
				className: "group flex flex-col px-4 py-3 transition-colors hover:bg-primary/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[15px] font-semibold text-foreground/80 transition-colors group-hover:text-primary",
					children: item.label
				}), item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 text-xs text-muted-foreground/70",
					children: item.description
				})]
			}, item.href))
		})]
	});
}
//#endregion
//#region src/components/Header.tsx
var aboutItems = [
	{
		label: "Who We Are",
		href: "/who-we-are",
		description: "Our mission, values, and expertise"
	},
	{
		label: "Our Story",
		href: "/our-story",
		description: "Forged in the field"
	},
	{
		label: "Our Solution",
		href: "/our-solution",
		description: "The communal farming partnership"
	},
	{
		label: "Partner With Us",
		href: "/partner-with-us",
		description: "Your land. Our expertise."
	}
];
var resourcesItems = [{
	label: "Publications",
	href: "/publications",
	description: "Research and insights"
}, {
	label: "Blog",
	href: "/blog",
	description: "Stories from the field"
}];
function Header() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl transition-shadow duration-200 ${scrolled ? "header-scrolled" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2 transition-opacity hover:opacity-80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.png",
						alt: "Farms Empire",
						className: "h-12 w-auto"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-0.5 xl:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenu, {
							label: "About",
							items: aboutItems
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/our-solution",
							className: "rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary",
							children: "Our Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary",
							children: "Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/why-ujamaa",
							className: "rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary",
							children: "Why Ujamaa?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sdg-2",
							className: "rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary",
							children: "UN SDG 2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenu, {
							label: "Resources",
							items: resourcesItems
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "ml-2 rounded-lg bg-primary px-5 py-2.5 text-[15px] font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMobileOpen(!mobileOpen),
					className: "flex h-11 w-11 items-center justify-center rounded-lg text-foreground/70 transition-all hover:bg-primary/5 hover:text-primary xl:hidden",
					"aria-label": "Toggle menu",
					children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "h-6 w-6",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M6 18L18 6M6 6l12 12"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "h-6 w-6",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M4 6h16M4 12h16M4 18h16"
						})
					})
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dropdown-animate-in border-t border-border/60 bg-background/95 px-4 py-6 backdrop-blur-xl xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						onClick: () => setMobileOpen(false),
						className: "rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-4 py-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/50",
							children: "About"
						}), aboutItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							onClick: () => setMobileOpen(false),
							className: "block rounded-lg px-4 py-3 text-base font-medium text-foreground/70 hover:bg-primary/5 hover:text-primary",
							children: item.label
						}, item.href))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/our-solution",
						onClick: () => setMobileOpen(false),
						className: "rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary",
						children: "Our Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects",
						onClick: () => setMobileOpen(false),
						className: "rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary",
						children: "Projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/why-ujamaa",
						onClick: () => setMobileOpen(false),
						className: "rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary",
						children: "Why Ujamaa?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sdg-2",
						onClick: () => setMobileOpen(false),
						className: "rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary",
						children: "UN SDG 2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-4 py-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/50",
							children: "Resources"
						}), resourcesItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							onClick: () => setMobileOpen(false),
							className: "block rounded-lg px-4 py-3 text-base font-medium text-foreground/70 hover:bg-primary/5 hover:text-primary",
							children: item.label
						}, item.href))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setMobileOpen(false),
						className: "mt-2 rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground hover:bg-primary/90",
						children: "Contact"
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 bg-primary text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/logo.png",
								alt: "Farms Empire",
								className: "h-10 w-auto brightness-0 invert"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-sm leading-relaxed text-white/70",
								children: "Communities Grow Empires. We partner with landowners, communities, and investors to build sustainable agricultural enterprises across Africa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-4",
								children: [
									"Instagram",
									"Facebook",
									"LinkedIn",
									"X"
								].map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-medium text-white/70 transition-colors hover:bg-white/20 hover:text-white",
									children: social.charAt(0)
								}, social))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold uppercase tracking-wider text-white/50",
						children: "About"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: [
							{
								label: "Who We Are",
								href: "/who-we-are"
							},
							{
								label: "Our Story",
								href: "/our-story"
							},
							{
								label: "Our Solution",
								href: "/our-solution"
							},
							{
								label: "Why Ujamaa?",
								href: "/why-ujamaa"
							}
						].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.href,
							className: "text-sm text-white/70 transition-colors hover:text-white",
							children: link.label
						}) }, link.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold uppercase tracking-wider text-white/50",
						children: "Programs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: [
							{
								label: "Partner With Us",
								href: "/partner-with-us"
							},
							{
								label: "UN SDG 2",
								href: "/sdg-2"
							},
							{
								label: "Publications",
								href: "/publications"
							},
							{
								label: "Blog",
								href: "/blog"
							}
						].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.href,
							className: "text-sm text-white/70 transition-colors hover:text-white",
							children: link.label
						}) }, link.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold uppercase tracking-wider text-white/50",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@farmsempire.africa",
								className: "transition-colors hover:text-white",
								children: "info@farmsempire.africa"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+2349120800107",
								className: "transition-colors hover:text-white",
								children: "+234 (0) 912 080 0107"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Port Harcourt, Rivers State, Nigeria" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Lagos, Nigeria" })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-white/50",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Farms Empire. All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-sm text-white/50 transition-colors hover:text-white",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-sm text-white/50 transition-colors hover:text-white",
						children: "Terms of Service"
					})]
				})]
			})]
		})
	});
}
//#endregion
//#region src/routes/_public.tsx?tsr-split=component
function PublicLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PublicLayout as component };
