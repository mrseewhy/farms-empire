import { r as __toESM, t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as require_react } from "./react-5VzO3yf4.js";
import { n as Outlet } from "./Match-B-QGphPG.js";
import { t as Link } from "./link-DeGtLGkj.js";
import { t as cn } from "./utils-BcuCXoSn.js";
import { t as siteConfig } from "./config-B_JLTQPd.js";
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
						src: "/images/logo-nobg.png",
						alt: "Farms Empire",
						className: "h-16 w-auto"
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
							children: "Solutions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/our-services",
							className: "font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary",
							children: "Services"
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
						children: "Solutions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/our-services",
						onClick: () => setMobileOpen(false),
						className: "font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary",
						children: "Services"
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
								src: "/images/logo-nobg.png",
								alt: "Farms Empire",
								className: "h-16 w-auto brightness-25 invert"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-sm leading-relaxed text-white/60",
								children: "Communities Grow Empires. We partner with landowners, communities, and investors to build sustainable agricultural enterprises across Africa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-3",
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
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all duration-200 hover:bg-white/20 hover:text-white hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4",
										fill: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: social.icon })
									})
								}, social.url))
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
								label: "Solutions",
								href: "/our-solution"
							},
							{
								label: "Services",
								href: "/our-services"
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
								label: "Our Projects",
								href: "/projects"
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
								href: `mailto:${siteConfig.contact.email.general}`,
								className: "transition-colors duration-200 hover:text-white",
								children: siteConfig.contact.email.general
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
								className: "transition-colors duration-200 hover:text-white",
								children: siteConfig.contact.phone
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: siteConfig.contact.address.offices.join(", ") })
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
						" ",
						siteConfig.name,
						". All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy-policy",
						className: "text-sm text-white/40 transition-colors duration-200 hover:text-white",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://bigyarddigital.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-sm text-white/40 transition-colors duration-200 hover:text-white",
						children: "Made by Bigyard Digital"
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
