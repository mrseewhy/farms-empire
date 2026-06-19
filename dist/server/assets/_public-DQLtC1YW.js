import { r as __toESM, t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as require_react } from "./react-5VzO3yf4.js";
import { n as Outlet } from "./Match-DZ-gYcDu.js";
import { t as Link } from "./link-DeGtLGkj.js";
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
			className: "font-display flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary",
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
			className: "animate-dropdown-in absolute left-0 top-full z-50 mt-1 min-w-[220px] overflow-hidden rounded-xl border border-border/50 bg-card py-2 shadow-xl",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.href,
				onClick: () => setOpen(false),
				className: "font-display group block px-4 py-2.5 text-[15px] font-semibold text-foreground transition-colors duration-200 hover:bg-primary/5 hover:text-primary",
				children: item.label
			}, item.href))
		})]
	});
}
//#endregion
//#region src/components/Header.tsx
var aboutItems = [
	{
		label: "Who We Are",
		href: "/who-we-are"
	},
	{
		label: "Our Story",
		href: "/our-story"
	},
	{
		label: "Partner With Us",
		href: "/partner-with-us"
	}
];
var resourcesItems = [{
	label: "Publications",
	href: "/publications"
}, {
	label: "Blog",
	href: "/blog"
}];
function Header() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [mobileAboutOpen, setMobileAboutOpen] = (0, import_react.useState)(false);
	const [mobileResourcesOpen, setMobileResourcesOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border/40 bg-white/90 shadow-sm backdrop-blur-xl header-scrolled" : "border-transparent bg-white/70 backdrop-blur-md"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2 transition-opacity hover:opacity-80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.jpg",
						alt: "Farms Empire",
						className: "h-18 w-auto"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-0.5 xl:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenu, {
							label: "About",
							items: aboutItems
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/our-solution",
							className: "font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary",
							children: "Our Solution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary",
							children: "Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/why-ujamaa",
							className: "font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary",
							children: "Why Ujamaa?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sdg-2",
							className: "font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary",
							children: "UN SDG 2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenu, {
							label: "Resources",
							items: resourcesItems
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "ml-3 rounded-full bg-primary px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.98]",
							children: "Contact Us"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMobileOpen(!mobileOpen),
					className: "flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-muted text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary xl:hidden",
					"aria-label": "Toggle menu",
					children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "h-5 w-5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2.5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M6 18L18 6M6 6l12 12"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "h-5 w-5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2.5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M4 6h16M4 12h16M4 18h16"
						})
					})
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-dropdown-in border-t border-border/40 bg-white/95 px-4 py-4 backdrop-blur-xl xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-0.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						onClick: () => setMobileOpen(false),
						className: "font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMobileAboutOpen(!mobileAboutOpen),
						className: "font-display flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
						children: ["About", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: `h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`,
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
					}),
					mobileAboutOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-4 border-l-2 border-border/40 pl-4",
						children: aboutItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							onClick: () => setMobileOpen(false),
							className: "font-display block rounded-lg px-4 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/our-solution",
						onClick: () => setMobileOpen(false),
						className: "font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
						children: "Our Solution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects",
						onClick: () => setMobileOpen(false),
						className: "font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
						children: "Projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/why-ujamaa",
						onClick: () => setMobileOpen(false),
						className: "font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
						children: "Why Ujamaa?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sdg-2",
						onClick: () => setMobileOpen(false),
						className: "font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
						children: "UN SDG 2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMobileResourcesOpen(!mobileResourcesOpen),
						className: "font-display flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
						children: ["Resources", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: `h-4 w-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`,
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
					}),
					mobileResourcesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-4 border-l-2 border-border/40 pl-4",
						children: resourcesItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							onClick: () => setMobileOpen(false),
							className: "font-display block rounded-lg px-4 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 border-t border-border/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setMobileOpen(false),
						className: "rounded-full bg-primary px-6 py-3 text-center text-[15px] font-semibold text-white transition-all hover:bg-primary/90 active:scale-[0.98]",
						children: "Contact Us"
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
		className: "bg-primary",
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
								className: "h-16 w-auto "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-sm leading-relaxed text-white/60",
								children: "Communities Grow Empires. We partner with landowners, communities, and investors to build sustainable agricultural enterprises across Africa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-3",
								children: [
									"Instagram",
									"Facebook",
									"LinkedIn",
									"X"
								].map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white/60 transition-all duration-200 hover:bg-white/20 hover:text-white hover:scale-110",
									children: social.charAt(0)
								}, social))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-bold uppercase tracking-widest text-white/40",
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
							className: "text-sm text-white/60 transition-colors duration-200 hover:text-white",
							children: link.label
						}) }, link.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-bold uppercase tracking-widest text-white/40",
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
							className: "text-sm text-white/60 transition-colors duration-200 hover:text-white",
							children: link.label
						}) }, link.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-bold uppercase tracking-widest text-white/40",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-white/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@farmsempire.africa",
								className: "transition-colors duration-200 hover:text-white",
								children: "info@farmsempire.africa"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+2349120800107",
								className: "transition-colors duration-200 hover:text-white",
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
					className: "text-sm text-white/40",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Farms Empire. All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-sm text-white/40 transition-colors duration-200 hover:text-white",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-sm text-white/40 transition-colors duration-200 hover:text-white",
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
