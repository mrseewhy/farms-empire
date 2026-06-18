# CONTEXT DOCUMENT: FARMS EMPIRE WEB PLATFORM

## 1. Stack

- **Framework:** TanStack Start (`^1.0.0`) with React (`^19.0.0`) and Vite (`^6.0.0`)
- **State Management:** Zustand (`^5.0.0`) - _Strictly for ephemeral UI state only_
- **Styling & UI:** Tailwind CSS (`^3.4.0`), shadcn/ui (latest), `@tailwindcss/typography` (`^0.5.10`)
- **Data Fetching:** TanStack Query (`@tanstack/react-query` `^5.0.0`) - _Used alongside TanStack Start server functions_
- **WYSIWYG Editor:** TipTap (`@tiptap/react` `^2.10.0`, `@tiptap/starter-kit` `^2.10.0`)
- **HTML Sanitization:** DOMPurify (`^3.0.0`) - _Used to sanitize TipTap HTML content before sending to server_
- **Backend/Runtime:** TanStack Start Server Functions executing on Cloudflare Workers (`wrangler` `^3.90.0`)
- **Database:** Turso (Edge libSQL/SQLite) via `@libsql/client` (`^0.14.0`) + Drizzle ORM (`^0.36.0`)
- **Authentication:** Better Auth (`^1.1.0`)
- **Media Storage:** Cloudinary (Direct client-to-cloud uploads via signed presets, `@cloudinary/url-gen` `^1.21.0`)
- **Validation:** Zod (`^3.23.0`)
- **Forms:** React Hook Form (`^7.53.0`)

## 2. Absolute Constraints

1.  **No Client-Side Auth Bypass:** Every Server Function and protected route loader MUST validate the Better Auth session server-side. UI hiding is UX only, not security.
2.  **No Worker Image Processing:** Cloudflare Workers must NEVER process, resize, or compress images. All image transformations must be offloaded to Cloudinary via URL parameters.
3.  **No N+1 Queries:** Database reads MUST use Drizzle relational queries (`with: {}`) or explicit `LEFT JOIN`s.
4.  **Cache Dashboard Stats:** Dashboard overview stats MUST be cached in Cloudflare KV with a 60-second TTL to protect Turso read limits.
5.  **Strict Rendering Split:** Purely static pages MUST be SSG. Dynamic pages MUST be SSR with Cloudflare edge caching (`max-age=60, stale-while-revalidate=86400`).
6.  **Cloudinary Tier Protection:** All Cloudinary asset URLs MUST be cached at the Cloudflare edge for 30 days (`Edge TTL: 2592000`).

## 3. Naming Conventions

- **Files:**
  - Route files: `kebab-case.tsx` (e.g., `who-we-are.tsx`, `blog.$slug.tsx`).
  - Components: `PascalCase.tsx` (e.g., `TipTapEditor.tsx`).
  - Server Functions/Utils: `kebab-case.ts` (e.g., `cloudinary.ts`, `slug-generator.ts`).
- **Components:** `PascalCase` (e.g., `PublicLayout`, `ContactForm`).
- **Server Functions:** `camelCase` verb-noun (e.g., `createBlog`, `listUsers`, `submitContactForm`).
- **Variables/Constants:** `camelCase` for variables, `UPPER_SNAKE_CASE` for environment variables and strict constants.
- **Database:** `snake_case` for all tables, columns, and indexes (e.g., `author_id`, `created_at`).

## 4. Code Style Rules

- **Formatting:** Prettier default (2-space indent, single quotes, trailing commas, 80 char print width).
- **Import Order:** 1. React/Framework, 2. Third-party libraries, 3. Internal aliases (`@/`), 4. Relative paths. Alphabetize within each group.
- **Exports:** Named exports ONLY. No `export default` (except for TanStack Start route components if strictly mandated by the router config).
- **TypeScript:** `"strict": true`. No `any` types. Use `interface` for object shapes, `type` for unions/primitives.
- **Components:** Functional components only. Arrow function syntax for component declaration.

## 5. Explicitly Forbidden

- **Forbidden State:** Redux, React Context API for server data, or Apollo/Relay. (Use TanStack Start server functions + Zustand for UI).
- **Forbidden Backend:** REST API routes (Express/Fastify/Hono). Use TanStack Start Server Functions exclusively.
- **Forbidden Data Fetching:** `useEffect` for data fetching. Use route loaders or TanStack Query.
- **Forbidden Styling:** Inline styles, CSS modules, or styled-components. Use Tailwind utility classes exclusively.
- **Forbidden DB Access:** Direct `fetch` or SQL string concatenation to the database. Use Drizzle ORM exclusively.
- **Forbidden Auth:** Custom JWT implementation or manual password hashing. Use Better Auth exclusively.

## 6. Escalation Rule

If a decision affects more than the current file, stop and escalate to Claude.
