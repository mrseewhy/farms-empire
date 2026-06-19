import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
//#region src/routes/_public/contact.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Contact Us",
			subtitle: "Whether you are a landowner, community representative, or investor, we would love to hear from you."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Contact form coming soon. See Issue #2.4."
				})
			})
		})]
	});
}
//#endregion
export { ContactPage as component };
