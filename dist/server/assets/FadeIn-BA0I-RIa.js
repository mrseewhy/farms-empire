import { r as __toESM, t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as require_react } from "./react-5VzO3yf4.js";
import { t as cn } from "./utils-BcuCXoSn.js";
//#region src/components/FadeIn.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function FadeIn({ children, direction = "up", delay = 0, duration = 600, className, once = true }) {
	const ref = (0, import_react.useRef)(null);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				if (once) observer.unobserve(entry.target);
			} else if (!once) setIsVisible(false);
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [once]);
	const directionClass = {
		up: "animate-fade-in-up",
		down: "animate-fade-in-down",
		left: "animate-fade-in-left",
		right: "animate-fade-in-right",
		none: "animate-fade-in"
	}[direction];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn(isVisible ? directionClass : "opacity-0", className),
		style: {
			animationDuration: `${duration}ms`,
			animationDelay: `${delay}ms`,
			animationFillMode: "forwards"
		},
		children
	});
}
//#endregion
export { FadeIn as t };
