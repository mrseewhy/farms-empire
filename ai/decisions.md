# Decisions Log

## Decision: Cloudflare Vite Plugin approach for TanStack Start

**Date:** 2026-06-18
**Made by:** Buffy (Master Orchestrator)
**Context:** TanStack Start supports multiple Cloudflare deployment approaches
**Decision:** Use `@cloudflare/vite-plugin` directly in `vite.config.ts` rather than the older `@tanstack/start-server-adapter-cloudflare`
**Reason:** The `@cloudflare/vite-plugin` approach is the modern, officially recommended method as of 2025-2026. It provides better integration with Cloudflare bindings, SSR environment support, and type generation via `wrangler types`.
**Tradeoffs:** None significant — this is the recommended path forward.
**Revisit if:** TanStack Start releases a first-party Cloudflare adapter that supersedes this approach.

## Decision: Tailwind CSS v4 @theme with base spacing multiplier

**Date:** 2026-06-18
**Made by:** Buffy (Master Orchestrator)
**Context:** The design system defines a 4px base grid spacing scale
**Decision:** Use Tailwind v4's `--spacing` base multiplier (set to `4px`) to generate the spacing scale automatically, rather than defining individual `--spacing-1`, `--spacing-2`, etc. tokens
**Reason:** Tailwind v4's `--spacing` namespace controls the base multiplier. Setting `--spacing: 4px` makes `p-1 = 4px`, `p-2 = 8px`, `p-3 = 12px`, etc., matching the design system exactly.
**Tradeoffs:** The custom spacing tokens in `@theme` were removed in favor of the base multiplier approach.
**Revisit if:** The design system needs non-linear spacing values that don't follow the 4px grid.

## Decision: Google Fonts via HTML head link tags

**Date:** 2026-06-18
**Made by:** Buffy (Master Orchestrator)
**Context:** TanStack Start's `links` array in `head()` has specific shape requirements
**Decision:** Load Google Fonts (Inter, Instrument Serif) via `<link>` tags directly in the `<head>` of the root document, before `<HeadContent />`
**Reason:** External stylesheet links with `crossOrigin` attributes may not render correctly through TanStack Start's `links` array. Direct HTML head placement is more reliable.
**Tradeoffs:** None — fonts load correctly and the approach is standard.
**Revisit if:** TanStack Start adds first-party support for external stylesheet links.
