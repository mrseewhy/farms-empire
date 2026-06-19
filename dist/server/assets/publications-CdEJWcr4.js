import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as PageHero } from "./PageHero-8BdnHdBb.js";
//#region src/routes/_public/publications.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function PublicationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Publications",
			subtitle: "Field research, policy analysis, impact reports, and practical guides advancing the knowledge base of African agriculture."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Publications listing coming soon. See Issue #2.3."
				})
			})
		})]
	});
}
//#endregion
export { PublicationsPage as component };
