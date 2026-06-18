# Performance Architecture (`performance.md`)

This module defines strategies to ensure the application remains fast, SEO-friendly, and strictly within the free/low-tier limits of Cloudflare, Turso, and Cloudinary.

## 1. Cloudflare Worker Limits (CPU/Memory)

- **Constraint:** Free/Pro workers have strict CPU time limits (10ms - 50ms per request).
- **Mitigation:**
  - **No Image Processing:** Images are never processed in the Worker. They are uploaded directly from the client browser to Cloudinary.
  - **No Heavy Parsing:** HTML sanitization is kept lightweight. Complex data transformations are avoided.
  - **Edge Caching:** SSR pages are cached at the edge, meaning the Worker only executes on cache misses.

## 2. Turso Database Efficiency

- **Constraint:** Turso charges for Row Reads/Writes. N+1 queries will bankrupt the project.
- **Mitigation:**
  - **Drizzle Relational Queries:** Use Drizzle's `db.query.blogs.findMany({ with: { author: true } })` which translates to a single optimized `LEFT JOIN` SQL query, rather than fetching blogs and then looping to fetch authors.
  - **Selective Columns:** Dashboard lists only fetch `id`, `title`, `status`, `created_at`. The heavy `content` (HTML) column is only fetched on the detail/edit pages.
  - **Indexing:** Strict adherence to the indexes defined in `db.md` (e.g., indexing `status` and `created_at` for public list views).

## 3. Cloudinary Free Tier Protection

- **Constraint:** 25GB storage, 25GB monthly bandwidth.
- **Mitigation:**
  - **Aggressive Edge Caching:** As defined in `state.md`, Cloudflare caches all Cloudinary URLs for 30 days.
  - **Transformation Limits:** The TipTap editor is configured to only request specific, pre-defined transformations (e.g., `w_800,q_auto,f_auto`). It prevents users from requesting massive, unoptimized original files.
  - **Auto-Delete:** A scheduled cron job (or manual admin action) to identify and delete orphaned images in Cloudinary that are no longer referenced in the database.

## 4. Frontend Performance & SEO

- **TipTap Lazy Loading:** The TipTap editor is a heavy library (~150kb). It is dynamically imported (`React.lazy`) and only loaded when the user navigates to a dashboard create/edit page.
- **Image Optimization:** All public images use Cloudinary's `f_auto` (auto-format to WebP/AVIF) and `q_auto` (auto-quality). The project uses a custom optimized `Image` component wrapping `@cloudinary/url-gen` to generate responsive `srcset` attributes.
- **SEO Meta Tags:** Every public route uses TanStack Start's `<Meta>` component to inject unique `title`, `description`, and OpenGraph tags. Dynamic pages generate these from the database record's `title` and `excerpt`.

---
