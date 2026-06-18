# 🗺️ Phased Roadmap: Farms Empire Web Platform

As the Architect, I have structured this roadmap to ensure every phase results in a fully deployable, stable state. The ordering is strictly dictated by technical dependencies, ensuring that foundational infrastructure precedes UI, and UI precedes complex integrations.

---

## Phase 1: Foundation & Infrastructure

**Deployment State:** An empty but fully functional application shell with authentication, database connectivity, and design system ready. No public content or dashboard features yet.

1. **Project Setup & Tooling:** Initialize TanStack Start, configure Vite, Tailwind CSS, shadcn/ui, and establish Cloudflare Pages/Workers deployment pipelines.
2. **Database Schema & Seeding:** Define Drizzle ORM schema for Turso (users, blogs, projects, careers, contacts, subscriptions, publications), create indexes, and implement the initial Super Admin seed script.
3. **Authentication & RBAC Core:** Configure Better Auth, implement session management, create server-side session validation middleware, and define the `ADMIN` vs `MANAGER` role guards.
4. **Core Layouts & Routing Shell:** Build the `__root`, `_public` (Header/Footer), and `_dashboard` (Sidebar/Topbar) layout routes, establishing the file-based routing structure.
5. **Design System Implementation:** Translate the architectural design tokens (colors, typography, spacing, shadows) into Tailwind config and build the base shadcn/ui primitive components.

---

## Phase 2: Public Marketing Site (SSG & SSR)

**Deployment State:** The complete, public-facing marketing website is live and accessible to the world. Content is currently hardcoded or seeded.

1. **SSG Static Pages:** Build and statically generate the core informational pages (Home, Who We Are, Our Story, Our Solution, Why Ujamaa, SDG 2, Partner With Us) for maximum SEO and zero edge compute cost.
2. **SSR Dynamic Content Pages:** Build the server-side rendered list and detail pages for Blogs, Projects, and Careers, implementing the dynamic `$slug` routing and Cloudflare edge caching (`max-age=60`).
3. **Publications Page:** Build the SSR Publications page to display the list of external research/policy links fetched from the database.
4. **Public Contact Form:** Implement the categorized contact form with Zod validation, React Hook Form, and Cloudflare Turnstile integration, routing submissions to the `contacts` table via Server Functions.
5. **Newsletter Subscription:** Implement the publication/newsletter subscription form in the public footer/sections, validating emails and storing them in the `subscriptions` table without triggering automated emails.

---

## Phase 3: Dashboard Content Management & Media

**Deployment State:** Internal teams can now log in and manage all dynamic public content. The WYSIWYG editor is fully operational.

1. **Cloudinary & TipTap Integration:** Implement the signed upload preset Server Function, configure the 30-day Cloudflare edge cache for Cloudinary URLs, and build the custom TipTap image extension with graceful error/loading states.
2. **Blog Management CRUD:** Build the dashboard list, create, edit, and delete interfaces for Blogs, including the server-side auto-slug generation logic (appending `-1`, `-2` for duplicates).
3. **Project Management CRUD:** Build the dashboard CRUD interfaces for Projects, reusing the TipTap editor and slug generation logic.
4. **Career Management CRUD:** Build the dashboard CRUD interfaces for Careers, including job type and location fields.
5. **Publications Management CRUD:** Build the simple dashboard form to add, edit, and delete publication metadata and external URLs.

---

## Phase 4: User, Communication & Dashboard Operations

**Deployment State:** The platform is fully operational. Admins can manage staff, Managers can handle daily operations, and the internal inbox is active.

1. **User Management & Strict RBAC:** Build the user table and CRUD forms, enforcing server-side restrictions (Managers can only read and reset non-admin passwords; only Admins can create/delete/change roles).
2. **Contact Inbox Management:** Build the dashboard inbox to view, filter, mark as read, and archive public contact form submissions.
3. **Dashboard Overview Stats:** Implement the overview page, utilizing Cloudflare KV to cache the `COUNT()` queries (Total Blogs, Unread Contacts, etc.) with a 60-second TTL to protect Turso read limits.
4. **Profile & Password Management:** Build the user profile settings page, allowing users to update their own details and Managers to execute restricted password resets.
5. **Global Error Handling & UX Feedback:** Implement the standardized `AppError` catching mechanism, React Error Boundaries for route failures, and the Zustand-powered shadcn toast notification system.

---

## Phase 5: Optimization, SEO & Edge Performance

**Deployment State:** The application is production-hardened, fully optimized for search engines, and strictly adhering to all infrastructure free-tier constraints.

1. **Advanced SEO & Meta Tags:** Implement dynamic OpenGraph image generation, structured data (JSON-LD), and automated `sitemap.xml` generation for all public routes.
2. **Edge Caching & Asset Tuning:** Fine-tune Cloudflare Cache Rules for SSR pages, verify the 30-day TTL on Cloudinary assets, and implement responsive `srcset` generation for public images.
3. **Database Query Profiling:** Run Drizzle query profiling to guarantee zero N+1 issues, verify all foreign key indexes, and ensure dashboard lists only select necessary columns (excluding heavy HTML `content` fields).
4. **TipTap Performance & Autosave:** Implement lazy loading for the TipTap editor bundle, and add local storage draft recovery to prevent data loss during browser crashes.
5. **Accessibility & Responsive QA:** Conduct WCAG 2.1 AA compliance checks, refine the mobile slide-out dashboard drawer, and ensure all public forms have proper `aria-describedby` error linking.
