import { r as __toESM, t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as require_react } from "./react-5VzO3yf4.js";
import { t as cn } from "./utils-BcuCXoSn.js";
//#region src/components/Stagger.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Stagger({ children, staggerDelay = 100, className }) {
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
		className,
		children: Array.isArray(children) ? children.map((child, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn(isVisible ? "animate-fade-in-up" : "opacity-0"),
			style: {
				animationDuration: "500ms",
				animationDelay: `${index * staggerDelay}ms`,
				animationFillMode: "forwards"
			},
			children: child
		}, index)) : children
	});
}
//#endregion
export { Stagger as t };
