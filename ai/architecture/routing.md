# Routing Architecture (`routing.md`)

This module defines the TanStack Start file-based routing structure, rendering strategies, and layout hierarchy.

## 1. Rendering Strategy Split

- **SSG (Static Site Generation):** Used for purely static pages. Content is baked into HTML at build time. Zero edge compute cost.
- **SSR (Server-Side Rendering) + Edge Caching:** Used for dynamic pages. HTML is generated on the Cloudflare Worker on the first request, then cached at the Cloudflare Edge for 60 seconds (`stale-while-revalidate=86400`).

## 2. Public Routes (Marketing Site)

| Route Path         | File Path                        | Rendering Strategy | Data Requirements                        |
| :----------------- | :------------------------------- | :----------------- | :--------------------------------------- |
| `/login`           | `src/routes/login.tsx`           | **SSG**            | None (Login form, submits via Server Function) |
| `/`                | `src/routes/index.tsx`           | **SSG**            | None (Static content)                    |
| `/who-we-are`      | `src/routes/who-we-are.tsx`      | **SSG**            | None                                     |
| `/our-story`       | `src/routes/our-story.tsx`       | **SSG**            | None                                     |
| `/our-solution`    | `src/routes/our-solution.tsx`    | **SSG**            | None                                     |
| `/why-ujamaa`      | `src/routes/why-ujamaa.tsx`      | **SSG**            | None                                     |
| `/sdg-2`           | `src/routes/sdg-2.tsx`           | **SSG**            | None                                     |
| `/partner-with-us` | `src/routes/partner-with-us.tsx` | **SSG**            | None                                     |
| `/publications`    | `src/routes/publications.tsx`    | **SSR**            | Fetches `publications` list from Turso.  |
| `/contact`         | `src/routes/contact.tsx`         | **SSG**            | None (Form submits via Server Function)  |
| `/blog`            | `src/routes/blog/index.tsx`      | **SSR**            | Fetches paginated `PUBLISHED` blogs.     |
| `/blog/$slug`      | `src/routes/blog/$slug.tsx`      | **SSR**            | Fetches single blog by `params.slug`.    |
| `/careers`         | `src/routes/careers/index.tsx`   | **SSR**            | Fetches paginated `PUBLISHED` careers.   |
| `/careers/$slug`   | `src/routes/careers/$slug.tsx`   | **SSR**            | Fetches single career by `params.slug`.  |
| `/projects`        | `src/routes/projects/index.tsx`  | **SSR**            | Fetches paginated `PUBLISHED` projects.  |
| `/projects/$slug`  | `src/routes/projects/$slug.tsx`  | **SSR**            | Fetches single project by `params.slug`. |

## 3. Dashboard Routes (Admin Panel)

All routes under `/dashboard` require `Auth Required = Yes`. Rendered via **SSR** (no caching, real-time data).

| Route Path                | File Path                               | Access Level       | Data Requirements                      |
| :------------------------ | :-------------------------------------- | :----------------- | :------------------------------------- |
| `/dashboard`              | `src/routes/dashboard/index.tsx`        | `ADMIN`, `MANAGER` | Fetches cached dashboard stats.        |
| `/dashboard/users`        | `src/routes/dashboard/users.tsx`        | `ADMIN`, `MANAGER` | Fetches paginated users.               |
| `/dashboard/blogs`        | `src/routes/dashboard/blogs.tsx`        | `ADMIN`, `MANAGER` | Fetches all blogs (Draft/Published).   |
| `/dashboard/blogs/$id`    | `src/routes/dashboard/blogs.$id.tsx`    | `ADMIN`, `MANAGER` | Fetches single blog by ID for editing. |
| `/dashboard/projects`     | `src/routes/dashboard/projects.tsx`     | `ADMIN`, `MANAGER` | Fetches all projects.                  |
| `/dashboard/projects/$id` | `src/routes/dashboard/projects.$id.tsx` | `ADMIN`, `MANAGER` | Fetches single project by ID.          |
| `/dashboard/careers`      | `src/routes/dashboard/careers.tsx`      | `ADMIN`, `MANAGER` | Fetches all careers.                   |
| `/dashboard/careers/$id`  | `src/routes/dashboard/careers.$id.tsx`  | `ADMIN`, `MANAGER` | Fetches single career by ID.           |
| `/dashboard/contacts`     | `src/routes/dashboard/contacts.tsx`     | `ADMIN`, `MANAGER` | Fetches contact inbox.                 |

## 4. Layout Hierarchy

- **`__root.tsx`**: Loads global fonts (Inter, Instrument Serif), initializes Tailwind, sets up global error boundary.
- **`_public.tsx` (Layout Route)**: Wraps public routes. Contains Public Header, Footer, and Newsletter Subscription CTA.
- **`_dashboard.tsx` (Layout Route)**: Wraps dashboard routes. Contains Sidebar, Topbar (with user profile/logout), and main content area. Protected by an `authGuard` loader.

---
