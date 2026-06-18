# State Architecture (`state.md`)

This module defines the separation of client-side UI state and server-side data state, along with caching strategies to respect infrastructure limits.

## 1. Client-Side State (Zustand)

Zustand is strictly limited to ephemeral UI state. **No server data is stored in Zustand.**

- **`useUIStore`**:
  - `sidebarCollapsed: boolean` (Toggles dashboard sidebar width)
  - `theme: 'light' | 'dark'` (Persisted to localStorage)
  - `toasts: Toast[]` (Manages shadcn/ui toast notifications)
  - `mobileMenuOpen: boolean` (Toggles mobile navigation)

## 2. Server-Side State (TanStack Query / Server Functions)

Data fetching is handled by TanStack Start's native server function integration and React Suspense.

- **Mutations:** Handled via `useMutation` or TanStack Start's `createServerFn`. Automatically invalidates relevant queries on success.
- **Queries:** Handled via `useQuery` or route loaders.
- **Optimistic Updates:** Used in the Contact Inbox to instantly mark messages as "Read" in the UI before the server confirms.

## 3. Caching Strategy (Infrastructure Level)

### Cloudflare KV (Dashboard Stats)

- **Target:** `getDashboardStats` server function.
- **Mechanism:** Before querying Turso, the function checks Cloudflare KV for the key `dashboard_stats`.
- **TTL:** 60 seconds.
- **Invalidation:** The KV key is deleted (forcing a fresh DB query on next load) whenever any of the following mutations occur: a blog/project/career is created, updated, or deleted; a contact is received or deleted; a user is created or deleted.

### Cloudflare Cache Rules (Public SSR & Cloudinary)

- **Target 1: Dynamic Public Pages (`/blog/*`, `/projects/*`, etc.)**
  - **Rule:** `Cache-Control: public, max-age=60, stale-while-revalidate=86400`
  - **Reason:** Serves cached HTML instantly for 99% of requests, reducing Worker CPU usage, while ensuring new content appears within 60 seconds.
- **Target 2: Cloudinary Assets (`res.cloudinary.com/*`)**
  - **Rule:** `Edge TTL: 2592000` (30 days), `Browser TTL: 2592000`.
  - **Reason:** Protects the Cloudinary free tier. Transformations (resizing, WebP conversion) only consume Cloudinary credits on the very first request. Subsequent global requests are served directly from Cloudflare's edge cache.

---
