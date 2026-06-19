import { r as __toESM, t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
import { t as require_react } from "./react-5VzO3yf4.js";
import { j as escapeHtml, k as deepEqual, n as useStore, o as useHydrated, r as useRouter } from "./react-dom-B9kYsnq-.js";
import { l as createNonReactiveMutableStore, n as Outlet, o as RouterCore, u as createNonReactiveReadonlyStore } from "./Match-B-QGphPG.js";
import { o as getAssetCrossOrigin, r as appendUniqueUserTags, s as getScriptPreloadAttrs, u as resolveManifestCssLink } from "./atom-HSyjuv6w.js";
import { i as createRootRoute, n as lazyRouteComponent, r as createFileRoute, t as Route$17 } from "./_postId-Bc9l8lae.js";
//#region node_modules/@tanstack/react-router/dist/esm/routerStores.js
var getStoreFactory = (opts) => {
	return {
		createMutableStore: createNonReactiveMutableStore,
		createReadonlyStore: createNonReactiveReadonlyStore,
		batch: (fn) => fn()
	};
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/router.js
/**
* Creates a new Router instance for React.
*
* Pass the returned router to `RouterProvider` to enable routing.
* Notable options: `routeTree` (your route definitions) and `context`
* (required if the root route was created with `createRootRouteWithContext`).
*
* @param options Router options used to configure the router.
* @returns A Router instance to be provided to `RouterProvider`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouterFunction
*/
var createRouter = (options) => {
	return new Router(options);
};
var Router = class extends RouterCore {
	constructor(options) {
		super(options, getStoreFactory);
	}
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Asset.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var noopScriptHandler = () => {};
function setScriptAttrs(script, attrs) {
	if (!attrs) return;
	for (const [key, value] of Object.entries(attrs)) if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
}
function Asset(asset) {
	const { attrs, children, nonce, preventScriptHoist } = asset;
	switch (asset.tag) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
			...attrs,
			suppressHydrationWarning: true,
			children
		});
		case "meta": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
			...attrs,
			suppressHydrationWarning: true
		});
		case "link": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			...attrs,
			precedence: attrs?.precedence ?? (attrs?.rel === "stylesheet" ? "default" : void 0),
			nonce,
			suppressHydrationWarning: true
		});
		case "style":
			if (asset.inlineCss && false);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
				...attrs,
				dangerouslySetInnerHTML: { __html: children },
				nonce
			});
		case "script": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Script, {
			attrs,
			preventScriptHoist,
			children
		});
		default: return null;
	}
}
function Script({ attrs, children, preventScriptHoist }) {
	useRouter();
	useHydrated();
	const dataScript = typeof attrs?.type === "string" && attrs.type !== "" && attrs.type !== "text/javascript" && attrs.type !== "module";
	import_react.useEffect(() => {
		if (dataScript) return;
		if (attrs?.src) {
			const normSrc = (() => {
				try {
					const base = document.baseURI || window.location.href;
					return new URL(attrs.src, base).href;
				} catch {
					return attrs.src;
				}
			})();
			for (const el of document.querySelectorAll("script[src]")) if (el.src === normSrc) return;
			const script = document.createElement("script");
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
		if (typeof children === "string") {
			const typeAttr = typeof attrs?.type === "string" ? attrs.type : "text/javascript";
			const nonceAttr = typeof attrs?.nonce === "string" ? attrs.nonce : void 0;
			for (const el of document.querySelectorAll("script:not([src])")) {
				if (!(el instanceof HTMLScriptElement)) continue;
				const sType = el.getAttribute("type") ?? "text/javascript";
				const sNonce = el.getAttribute("nonce") ?? void 0;
				if (el.textContent === children && sType === typeAttr && sNonce === nonceAttr) return;
			}
			const script = document.createElement("script");
			script.textContent = children;
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
	}, [
		attrs,
		children,
		dataScript
	]);
	if (attrs?.src) {
		if (!preventScriptHoist) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			suppressHydrationWarning: true
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			onLoad: noopScriptHandler,
			suppressHydrationWarning: true
		});
	}
	if (typeof children === "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		...attrs,
		dangerouslySetInnerHTML: { __html: children },
		suppressHydrationWarning: true
	});
	return null;
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/headContentUtils.js
function buildTagsFromMatches(router, nonce, matches, assetCrossOrigin) {
	const routeMeta = matches.map((match) => match.meta).filter((meta) => meta !== void 0);
	const resultMeta = [];
	const metaByAttribute = {};
	let title;
	for (let i = routeMeta.length - 1; i >= 0; i--) {
		const metas = routeMeta[i];
		for (let j = metas.length - 1; j >= 0; j--) {
			const m = metas[j];
			if (!m) continue;
			if (m.title) {
				if (!title) title = {
					tag: "title",
					children: m.title
				};
			} else if ("script:ld+json" in m) try {
				const json = JSON.stringify(m["script:ld+json"]);
				resultMeta.push({
					tag: "script",
					attrs: { type: "application/ld+json" },
					children: escapeHtml(json)
				});
			} catch {}
			else {
				const attribute = m.name ?? m.property;
				if (attribute) if (metaByAttribute[attribute]) continue;
				else metaByAttribute[attribute] = true;
				resultMeta.push({
					tag: "meta",
					attrs: {
						...m,
						nonce
					}
				});
			}
		}
	}
	if (title) resultMeta.push(title);
	if (nonce) resultMeta.push({
		tag: "meta",
		attrs: {
			property: "csp-nonce",
			content: nonce
		}
	});
	resultMeta.reverse();
	const constructedLinks = matches.flatMap((match) => match.links ?? []).filter((link) => link !== void 0).map((link) => ({
		tag: "link",
		attrs: {
			...link,
			nonce
		}
	}));
	const manifest = router.ssr?.manifest;
	const manifestCssTags = [];
	if (manifest) {
		matches.forEach((match) => {
			(manifest.routes[match.routeId]?.css)?.forEach((link) => {
				const resolvedLink = resolveManifestCssLink(link);
				manifestCssTags.push({
					tag: "link",
					attrs: {
						rel: "stylesheet",
						...resolvedLink,
						crossOrigin: getAssetCrossOrigin(assetCrossOrigin, "stylesheet") ?? resolvedLink.crossOrigin,
						suppressHydrationWarning: true,
						nonce
					}
				});
			});
		});
		if (manifest.inlineStyle) manifestCssTags.push({
			tag: "style",
			attrs: {
				...manifest.inlineStyle.attrs,
				nonce
			},
			children: manifest.inlineStyle.children,
			inlineCss: true
		});
	}
	const preloadLinks = [];
	if (manifest) matches.forEach((match) => {
		manifest.routes[match.routeId]?.preloads?.forEach((preload) => {
			preloadLinks.push({
				tag: "link",
				attrs: {
					...getScriptPreloadAttrs(manifest, preload, assetCrossOrigin),
					nonce
				}
			});
		});
	});
	const styles = matches.flatMap((match) => match.styles ?? []).filter((style) => style !== void 0).map(({ children, ...attrs }) => ({
		tag: "style",
		attrs: {
			...attrs,
			nonce
		},
		children
	}));
	const headScripts = matches.flatMap((match) => match.headScripts ?? []).filter((script) => script !== void 0).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			nonce
		},
		children
	}));
	const tags = [];
	appendUniqueUserTags(tags, resultMeta);
	tags.push(...preloadLinks);
	appendUniqueUserTags(tags, constructedLinks);
	tags.push(...manifestCssTags);
	appendUniqueUserTags(tags, styles);
	appendUniqueUserTags(tags, headScripts);
	return tags;
}
/**
* Build the list of head/link/meta/script tags to render for active matches.
* Used internally by `HeadContent`.
*/
var useTags = (assetCrossOrigin) => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	return buildTagsFromMatches(router, nonce, router.stores.matches.get(), assetCrossOrigin);
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/HeadContent.js
/**
* Render route-managed head tags (title, meta, links, styles, head scripts).
* Place inside the document head of your app shell.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/document-head-management
*/
function HeadContent(props) {
	const tags = useTags(props.assetCrossOrigin);
	const nonce = useRouter().options.ssr?.nonce;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tags.map((tag) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...tag,
		key: `tsr-meta-${JSON.stringify(tag)}`,
		nonce
	})) });
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Scripts.js
/**
* Render body script tags collected from route matches and SSR manifests.
* Should be placed near the end of the document body.
*/
var Scripts = () => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	const getAssetScripts = (matches) => {
		const assetScripts = [];
		const manifest = router.ssr?.manifest;
		if (!manifest) return [];
		for (const match of matches) {
			const scripts = manifest.routes[match.routeId]?.scripts;
			if (!scripts) continue;
			for (const asset of scripts) assetScripts.push({
				tag: "script",
				attrs: {
					...asset.attrs,
					nonce
				},
				children: asset.children,
				...typeof asset.attrs?.src === "string" ? { preventScriptHoist: true } : {}
			});
		}
		return assetScripts;
	};
	const getScripts = (matches) => matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			suppressHydrationWarning: true,
			nonce
		},
		children
	}));
	{
		const activeMatches = router.stores.matches.get();
		const assetScripts = getAssetScripts(activeMatches);
		return renderScripts(router, getScripts(activeMatches), assetScripts);
	}
	const assetScripts = useStore(router.stores.matches, getAssetScripts, deepEqual);
	return renderScripts(router, useStore(router.stores.matches, getScripts, deepEqual), assetScripts);
};
function renderScripts(router, scripts, assetScripts) {
	const allScripts = [...scripts, ...assetScripts];
	if (router.serverSsr) {
		const serverBufferedScript = router.serverSsr.takeBufferedScripts();
		if (serverBufferedScript) allScripts.unshift(serverBufferedScript);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: allScripts.map((asset, i) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...asset,
		key: `tsr-scripts-${asset.tag}-${i}`
	})) });
}
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-C6_GI2JG.css";
//#endregion
//#region src/routes/__root.tsx
var GOOGLE_FONTS = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap";
var Route$16 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Farms Empire | Communities Grow Empires" }
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	component: RootLayout
});
function RootLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "stylesheet",
				href: GOOGLE_FONTS
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "font-sans antialiased bg-background text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
//#endregion
//#region src/routes/dashboard.tsx
var $$splitComponentImporter$15 = () => import("./dashboard-DYza-Ins.js");
var Route$15 = createFileRoute("/dashboard")({
	beforeLoad: async () => {},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
//#endregion
//#region src/routes/_public.tsx
var $$splitComponentImporter$14 = () => import("./_public-CIozbnjl.js");
var Route$14 = createFileRoute("/_public")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
//#endregion
//#region src/routes/dashboard/index.tsx
var $$splitComponentImporter$13 = () => import("./dashboard-CxovOhvX.js");
var Route$13 = createFileRoute("/dashboard/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
//#endregion
//#region src/routes/_public/index.tsx
var $$splitComponentImporter$12 = () => import("./_public-CRQZYtGN.js");
var Route$12 = createFileRoute("/_public/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
//#endregion
//#region src/routes/_public/why-ujamaa.tsx
var $$splitComponentImporter$11 = () => import("./why-ujamaa-DIXZsbwH.js");
var Route$11 = createFileRoute("/_public/why-ujamaa")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
//#endregion
//#region src/routes/_public/who-we-are.tsx
var $$splitComponentImporter$10 = () => import("./who-we-are-0CAf8jxS.js");
var Route$10 = createFileRoute("/_public/who-we-are")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
//#endregion
//#region src/routes/_public/sdg-2.tsx
var $$splitComponentImporter$9 = () => import("./sdg-2-CtnNS7zQ.js");
var Route$9 = createFileRoute("/_public/sdg-2")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
//#endregion
//#region src/routes/_public/publications.tsx
var $$splitComponentImporter$8 = () => import("./publications-BHXx2RiT.js");
var Route$8 = createFileRoute("/_public/publications")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
//#endregion
//#region src/routes/_public/projects.tsx
var $$splitComponentImporter$7 = () => import("./projects-DFQzm7cf.js");
var Route$7 = createFileRoute("/_public/projects")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
//#endregion
//#region src/routes/_public/privacy-policy.tsx
var $$splitComponentImporter$6 = () => import("./privacy-policy-4R49GUK9.js");
var Route$6 = createFileRoute("/_public/privacy-policy")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
//#endregion
//#region src/routes/_public/partner-with-us.tsx
var $$splitComponentImporter$5 = () => import("./partner-with-us-ry40x5-K.js");
var Route$5 = createFileRoute("/_public/partner-with-us")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/_public/our-story.tsx
var $$splitComponentImporter$4 = () => import("./our-story-CXN2vE-6.js");
var Route$4 = createFileRoute("/_public/our-story")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
//#endregion
//#region src/routes/_public/our-solution.tsx
var $$splitComponentImporter$3 = () => import("./our-solution-C1EkhiVt.js");
var Route$3 = createFileRoute("/_public/our-solution")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
//#endregion
//#region src/routes/_public/our-services.tsx
var $$splitComponentImporter$2 = () => import("./our-services-BDwbog7q.js");
var Route$2 = createFileRoute("/_public/our-services")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/_public/contact.tsx
var $$splitComponentImporter$1 = () => import("./contact-DQx8X4Zo.js");
var Route$1 = createFileRoute("/_public/contact")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/_public/blog/index.tsx
var $$splitComponentImporter = () => import("./blog-Dkd3ftyt.js");
var Route = createFileRoute("/_public/blog/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var DashboardRoute = Route$15.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$16
});
var PublicRoute = Route$14.update({
	id: "/_public",
	getParentRoute: () => Route$16
});
var DashboardIndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => DashboardRoute
});
var PublicIndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicRoute
});
var PublicWhyUjamaaRoute = Route$11.update({
	id: "/why-ujamaa",
	path: "/why-ujamaa",
	getParentRoute: () => PublicRoute
});
var PublicWhoWeAreRoute = Route$10.update({
	id: "/who-we-are",
	path: "/who-we-are",
	getParentRoute: () => PublicRoute
});
var PublicSdg2Route = Route$9.update({
	id: "/sdg-2",
	path: "/sdg-2",
	getParentRoute: () => PublicRoute
});
var PublicPublicationsRoute = Route$8.update({
	id: "/publications",
	path: "/publications",
	getParentRoute: () => PublicRoute
});
var PublicProjectsRoute = Route$7.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => PublicRoute
});
var PublicPrivacyPolicyRoute = Route$6.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => PublicRoute
});
var PublicPartnerWithUsRoute = Route$5.update({
	id: "/partner-with-us",
	path: "/partner-with-us",
	getParentRoute: () => PublicRoute
});
var PublicOurStoryRoute = Route$4.update({
	id: "/our-story",
	path: "/our-story",
	getParentRoute: () => PublicRoute
});
var PublicOurSolutionRoute = Route$3.update({
	id: "/our-solution",
	path: "/our-solution",
	getParentRoute: () => PublicRoute
});
var PublicOurServicesRoute = Route$2.update({
	id: "/our-services",
	path: "/our-services",
	getParentRoute: () => PublicRoute
});
var PublicContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => PublicRoute
});
var PublicBlogIndexRoute = Route.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => PublicRoute
});
var PublicRouteChildren = {
	PublicContactRoute,
	PublicOurServicesRoute,
	PublicOurSolutionRoute,
	PublicOurStoryRoute,
	PublicPartnerWithUsRoute,
	PublicPrivacyPolicyRoute,
	PublicProjectsRoute,
	PublicPublicationsRoute,
	PublicSdg2Route,
	PublicWhoWeAreRoute,
	PublicWhyUjamaaRoute,
	PublicIndexRoute,
	PublicBlogPostIdRoute: Route$17.update({
		id: "/blog/$postId",
		path: "/blog/$postId",
		getParentRoute: () => PublicRoute
	}),
	PublicBlogIndexRoute
};
var PublicRouteWithChildren = PublicRoute._addFileChildren(PublicRouteChildren);
var DashboardRouteChildren = { DashboardIndexRoute };
var rootRouteChildren = {
	PublicRoute: PublicRouteWithChildren,
	DashboardRoute: DashboardRoute._addFileChildren(DashboardRouteChildren)
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { getRouter };
