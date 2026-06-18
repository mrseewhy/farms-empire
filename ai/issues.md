# GitHub Issues: Farms Empire Web Platform

Below are the 25 GitHub Issues corresponding to the sprint tasks. They are structured for direct ingestion by AI agents.

---

## 🟢 Phase 1: Foundation & Infrastructure

### Issue #1.1: Initialize TanStack Start project and configure Cloudflare deployment

- **Status:** ✅ Completed
- **Priority:** Critical
- **Agent:** Both
- **Dependencies:** None
- **Context files:** `ai/context.md`
- **Acceptance Criteria:**
  1. TanStack Start project is initialized with React 19 and Vite. ✅
  2. Tailwind CSS and shadcn/ui are installed and configured. ✅
  3. Cloudflare Pages and Workers (`wrangler.jsonc`) deployment configurations are present. ✅
  4. `npm run dev` and `npm run build` execute without errors. ✅
- **Out of Scope:**
  - Database schema design.
  - UI component creation.

### Issue #1.2: Implement design system tokens and base shadcn/ui primitives

- **Status:** ✅ Completed
- **Priority:** Critical
- **Agent:** Frontend
- **Dependencies:** #1.1
- **Context files:** `ai/designsystem.md`, `ai/context.md`
- **Acceptance Criteria:**
  1. Tailwind config includes all brand colors (Empire Green, Ujamaa Clay, Harvest Gold) and Stone neutrals. ✅
  2. Typography is configured with Inter (UI) and Instrument Serif (Display). ✅
  3. Base shadcn components (Button, Input, Card, Badge) are generated and mapped to design tokens. ✅
- **Out of Scope:**
  - Backend logic or API routes.
  - Complex layout implementations.

### Issue #1.3: Define Drizzle ORM schema for Turso and implement Super Admin seed script

- **Status:** ✅ Completed
- **Priority:** Critical
- **Agent:** Backend
- **Dependencies:** #1.1
- **Context files:** `ai/architecture/db.md`, `ai/context.md`
- **Acceptance Criteria:**
  1. Drizzle schema defines all tables (blogs, projects, careers, contacts, subscriptions, publications) with exact columns from `db.md`. ✅ (users managed by Better Auth)
  2. All specified indexes and foreign keys are applied. ✅
  3. Seed script reads `INITIAL_ADMIN_EMAIL` and `INITIAL_ADMIN_PASSWORD` env vars and creates the Super Admin if the users table is empty. ✅
- **Out of Scope:**
  - UI implementation.
  - API endpoint creation.

### Issue #1.4: Configure Better Auth and implement server-side session validation middleware

- **Status:** ✅ Completed
- **Priority:** Critical
- **Agent:** Backend
- **Dependencies:** #1.3
- **Context files:** `ai/architecture/auth.md`, `ai/architecture/security.md`, `ai/context.md`
- **Acceptance Criteria:**
  1. Better Auth is configured with the custom `role` column (`ADMIN` / `MANAGER`). ✅
  2. Session validation middleware is created to extract and verify the session cookie. ✅
  3. An RBAC guard function is implemented to enforce role checks before DB queries. ✅
- **Out of Scope:**
  - Frontend login forms.
  - Dashboard UI layouts.

### Issue #1.5: Build public and dashboard layout routes with auth protection

- **Status:** ✅ Completed
- **Priority:** Critical
- **Agent:** Frontend
- **Dependencies:** #1.2, #1.4
- **Context files:** `ai/architecture/routing.md`, `ai/designsystem.md`, `ai/context.md`
- **Acceptance Criteria:**
  1. `__root`, `_public` (Header/Footer), and `dashboard` (Sidebar/Topbar) layout routes are created. ✅
  2. The `dashboard` layout uses a `beforeLoad` hook to redirect unauthenticated users to `/login`. ✅ (TODO: uncomment when auth implemented)
  3. The dashboard sidebar correctly renders navigation links based on the design system. ✅
- **Out of Scope:**
  - Page-specific content.
  - Server-side data fetching logic.

---

## 🔵 Phase 2: Public Marketing Site (SSG & SSR)

### Issue #2.1: Build SSG static pages for core marketing content

- **Status:** ✅ Completed
- **Priority:** High
- **Agent:** Frontend
- **Dependencies:** #1.5
- **Context files:** `ai/architecture/routing.md`, `ai/designsystem.md`, `FARMS EMPIRE CONTENT.docx`
- **Acceptance Criteria:**
  1. Routes for Home, Who We Are, Our Story, Our Solution, Why Ujamaa, SDG 2, and Partner With Us are created. ✅
  2. Pages are configured for Static Site Generation (SSG). ✅
  3. Content from the provided `.docx` is accurately rendered using `@tailwindcss/typography` prose classes. ✅
- **Out of Scope:**
  - Dynamic data fetching.
  - Backend API creation.

### Issue #2.2: Build SSR dynamic content pages for Blogs, Projects, and Careers

- **Priority:** High
- **Agent:** Both
- **Dependencies:** #1.5
- **Context files:** `ai/architecture/routing.md`, `ai/architecture/api.md`, `ai/architecture/state.md`
- **Acceptance Criteria:**
  1. List and detail routes (`/blog`, `/blog/$slug`, etc.) are created for Blogs, Projects, and Careers.
  2. Backend Server Functions fetch published content using Drizzle relational queries.
  3. Routes are configured for SSR with Cloudflare edge caching headers (`max-age=60`).
- **Out of Scope:**
  - Dashboard CRUD interfaces for this content.

### Issue #2.3: Build SSR Publications page

- **Priority:** Medium
- **Agent:** Both
- **Dependencies:** #1.5
- **Context files:** `ai/architecture/routing.md`, `ai/architecture/api.md`
- **Acceptance Criteria:**
  1. The `/publications` route is created and configured for SSR.
  2. A Server Function fetches the list of publications (title, description, external_url, category) from Turso.
  3. External links open in a new tab with `rel="noopener noreferrer"`.
- **Out of Scope:**
  - PDF file upload functionality.
  - Automated email dispatching.

### Issue #2.4: Implement Public Contact Form with Turnstile integration

- **Priority:** High
- **Agent:** Both
- **Dependencies:** #1.5
- **Context files:** `ai/architecture/api.md`, `ai/architecture/security.md`, `ai/designsystem.md`
- **Acceptance Criteria:**
  1. Frontend form includes all specified fields and a Cloudflare Turnstile widget.
  2. Form uses React Hook Form + Zod for client-side validation.
  3. Backend Server Function validates the Turnstile token and Zod schema before inserting into the `contacts` table.
- **Out of Scope:**
  - Dashboard inbox UI (handled in Phase 4).
  - Automated email responses.

### Issue #2.5: Implement Newsletter Subscription form

- **Priority:** Medium
- **Agent:** Both
- **Dependencies:** #1.5
- **Context files:** `ai/architecture/api.md`, `ai/architecture/security.md`
- **Acceptance Criteria:**
  1. A simple email input form is added to the public footer/layout.
  2. Backend Server Function validates the email, checks for duplicates, and inserts into the `subscriptions` table.
  3. The API returns a generic success message to prevent email enumeration.
- **Out of Scope:**
  - Integration with external email marketing platforms (e.g., Mailchimp).

---

## 🟣 Phase 3: Dashboard Content Management & Media

### Issue #3.1: Integrate Cloudinary and build custom TipTap image extension

- **Status:** ✅ Partially Completed (Cloudinary backend done, TipTap extension pending)
- **Priority:** Critical
- **Agent:** Both
- **Dependencies:** #1.5
- **Context files:** `ai/architecture/api.md`, `ai/architecture/security.md`, `ai/architecture/performance.md`
- **Acceptance Criteria:**
  1. Backend Server Function generates secure Cloudinary signed upload presets. ✅
  2. Custom TipTap extension handles drag-and-drop, inserting a loading placeholder immediately. ⏳ (pending)
  3. On upload failure, the placeholder transforms into an error state without crashing the editor or losing text. ⏳ (pending)
- **Out of Scope:**
  - Server-side image processing or resizing.

### Issue #3.2: Build Publications Management CRUD

- **Priority:** Medium
- **Agent:** Both
- **Dependencies:** #1.5
- **Context files:** `ai/architecture/api.md`, `ai/architecture/db.md`
- **Acceptance Criteria:**
  1. Dashboard UI allows Admins and Managers to create, edit, and delete publications.
  2. Form captures title, description, category, and external URL.
  3. Backend Server Functions enforce RBAC and validate inputs via Zod.
- **Out of Scope:**
  - Public-facing publications page UI (handled in #2.3).

### Issue #3.3: Build Blog Management CRUD with auto-slug generation

- **Priority:** High
- **Agent:** Both
- **Dependencies:** #3.1
- **Context files:** `ai/architecture/api.md`, `ai/architecture/db.md`, `ai/architecture/auth.md`
- **Acceptance Criteria:**
  1. Dashboard UI integrates the TipTap editor for blog content.
  2. Backend automatically generates URL-friendly slugs from titles.
  3. If a slug collision occurs, the backend appends `-1`, `-2`, etc., until unique.
  4. Managers and Admins can publish directly without approval workflows.
- **Out of Scope:**
  - Public blog page UI (handled in #2.2).

### Issue #3.4: Build Project Management CRUD

- **Priority:** High
- **Agent:** Both
- **Dependencies:** #3.1
- **Context files:** `ai/architecture/api.md`, `ai/architecture/db.md`
- **Acceptance Criteria:**
  1. Dashboard UI allows creation and editing of projects using the TipTap editor.
  2. Form includes fields for title, location, content, cover image, and status.
  3. Auto-slug generation logic is reused from the Blog implementation.
- **Out of Scope:**
  - Public project page UI.

### Issue #3.5: Build Career Management CRUD

- **Priority:** Medium
- **Agent:** Both
- **Dependencies:** #3.1
- **Context files:** `ai/architecture/api.md`, `ai/architecture/db.md`
- **Acceptance Criteria:**
  1. Dashboard UI allows creation and editing of careers using the TipTap editor.
  2. Form includes fields for title, location, job type (enum), description, and status.
  3. Auto-slug generation logic is reused.
- **Out of Scope:**
  - Public careers page UI.

---

## 🟠 Phase 4: User, Communication & Dashboard Operations

### Issue #4.1: Implement global error handling and toast notifications

- **Priority:** High
- **Agent:** Frontend
- **Dependencies:** #1.5
- **Context files:** `ai/architecture/errors.md`, `ai/designsystem.md`
- **Acceptance Criteria:**
  1. Zustand store is configured to manage toast notifications.
  2. Global React Error Boundaries catch route failures and render a styled fallback UI.
  3. Server Function `AppError` throws are caught and automatically trigger the appropriate toast.
- **Out of Scope:**
  - Server-side logging infrastructure.

### Issue #4.2: Build User Management & Strict RBAC interfaces

- **Priority:** Critical
- **Agent:** Both
- **Dependencies:** #1.4, #4.1
- **Context files:** `ai/architecture/api.md`, `ai/architecture/auth.md`, `ai/architecture/db.md`
- **Acceptance Criteria:**
  1. Dashboard displays a paginated table of users.
  2. "Create User" and "Delete User" buttons are hidden in the UI for Managers.
  3. Backend Server Functions strictly block Managers from executing create/delete/update-role mutations.
  4. Deleting a user reassigns their authored blogs/projects to the deleting Admin within a DB transaction.
- **Out of Scope:**
  - Public user registration.

### Issue #4.3: Build Contact Inbox Management

- **Priority:** High
- **Agent:** Both
- **Dependencies:** #2.4
- **Context files:** `ai/architecture/api.md`, `ai/architecture/db.md`
- **Acceptance Criteria:**
  1. Dashboard inbox displays contact submissions with filters for category and read/unread status.
  2. Users can mark messages as read or archive/delete them.
  3. Backend updates the `is_read` boolean and handles soft/hard deletes based on requirements.
- **Out of Scope:**
  - Public contact form UI.

### Issue #4.4: Implement Dashboard Overview Stats with KV caching

- **Priority:** High
- **Agent:** Backend
- **Dependencies:** #1.3, #1.4
- **Context files:** `ai/architecture/api.md`, `ai/architecture/state.md`, `ai/architecture/performance.md`
- **Acceptance Criteria:**
  1. Server Function calculates total blogs, open careers, unread contacts, and total users.
  2. Results are cached in Cloudflare KV with a 60-second TTL.
  3. Cache is invalidated when relevant mutations (e.g., creating a blog) occur.
- **Out of Scope:**
  - Dashboard UI layout (Frontend will consume this API).

### Issue #4.5: Build Profile & Password Management

- **Priority:** Medium
- **Agent:** Both
- **Dependencies:** #4.2
- **Context files:** `ai/architecture/api.md`, `ai/architecture/auth.md`
- **Acceptance Criteria:**
  1. Users can update their own name and email.
  2. Managers can reset passwords for non-Admin users via the UI.
  3. Backend explicitly rejects password reset requests if the target user is an Admin and the caller is a Manager.
- **Out of Scope:**
  - "Forgot password" email flows (out of scope for this project).

---

## 🔴 Phase 5: Optimization, SEO & Edge Performance

### Issue #5.1: Implement advanced SEO, OpenGraph, and sitemap

- **Priority:** High
- **Agent:** Frontend
- **Dependencies:** #2.1, #2.2
- **Context files:** `ai/architecture/routing.md`, `ai/architecture/performance.md`
- **Acceptance Criteria:**
  1. Dynamic `<Meta>` tags are injected for all public routes using TanStack Start.
  2. OpenGraph images are generated for Blogs, Projects, and Careers.
  3. An automated `sitemap.xml` route is created listing all static and dynamic public URLs.
- **Out of Scope:**
  - Backend database schema changes.

### Issue #5.2: Tune edge caching and Cloudinary asset rules

- **Priority:** Critical
- **Agent:** Backend
- **Dependencies:** #2.2, #3.1
- **Context files:** `ai/architecture/state.md`, `ai/architecture/performance.md`
- **Acceptance Criteria:**
  1. Cloudflare Cache Rules are configured to cache SSR public pages for 60s with `stale-while-revalidate`.
  2. Cloudflare Cache Rules are configured to cache all `res.cloudinary.com` assets for 30 days (2592000s).
  3. Verify via HTTP headers that cache hits are occurring correctly.
- **Out of Scope:**
  - UI component styling.

### Issue #5.3: Implement TipTap lazy loading and local storage autosave

- **Priority:** Medium
- **Agent:** Frontend
- **Dependencies:** #3.1
- **Context files:** `ai/architecture/performance.md`, `ai/architecture/errors.md`
- **Acceptance Criteria:**
  1. The TipTap editor bundle is dynamically imported (`React.lazy`) to reduce initial dashboard JS payload.
  2. A local storage autosave mechanism captures draft content every 30 seconds.
  3. Drafts are recovered upon page reload if the user navigates away accidentally.
- **Out of Scope:**
  - Server-side draft storage (drafts are local only until published).

### Issue #5.4: Profile and optimize Drizzle database queries

- **Priority:** High
- **Agent:** Backend
- **Dependencies:** #3.3, #3.4, #3.5, #4.2
- **Context files:** `ai/architecture/db.md`, `ai/architecture/performance.md`
- **Acceptance Criteria:**
  1. All list views use Drizzle relational queries (`with: {}`) or explicit `LEFT JOIN`s.
  2. Dashboard lists explicitly select only necessary columns (excluding heavy `content` HTML fields).
  3. Query profiling confirms zero N+1 query patterns during standard dashboard navigation.
- **Out of Scope:**
  - Frontend UI rendering logic.

### Issue #5.5: Conduct accessibility and responsive QA

- **Priority:** Medium
- **Agent:** Frontend
- **Dependencies:** #1.5, #2.1, #4.1
- **Context files:** `ai/designsystem.md`, `ai/architecture/routing.md`
- **Acceptance Criteria:**
  1. All public forms include proper `aria-describedby` attributes linking inputs to error messages.
  2. The dashboard sidebar collapses into a slide-out drawer on viewports `< 768px`.
  3. Color contrast ratios for all text meet WCAG 2.1 AA standards.
- **Out of Scope:**
  - Backend API logic.
