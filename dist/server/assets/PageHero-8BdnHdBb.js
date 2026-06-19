import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
//#region src/components/PageHero.tsx
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-cover bg-center opacity-20",
			style: { backgroundImage: "url('/images/header.jpg')" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl border-l-4 border-accent pl-6 sm:pl-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-primary-foreground/80 sm:text-lg",
					children: subtitle
				})]
			})
		})]
	});
}
//#endregion
export { PageHero as t };
