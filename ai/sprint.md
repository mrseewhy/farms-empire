As the Scrum Master, I have broken down the 5 Phases into actionable sprint tasks.

Tasks are ordered strictly by technical dependency. Tasks marked with **`[parallel-safe]`** have no blocking dependencies within their phase and can be assigned to different agents (Frontend, Backend, etc.) to work on concurrently.

---

### 🟢 Phase 1: Foundation & Infrastructure

_Goal: A deployable, authenticated shell with database connectivity and design tokens._

1. **Task 1.1: Project Setup & Tooling**
   - Initialize TanStack Start, Vite, Tailwind, and configure Cloudflare Pages/Workers deployment pipelines.
   - _Dependencies: None. Must be completed first._
2. **Task 1.2: Design System Implementation** `[parallel-safe]`
   - Translate design tokens (colors, typography, spacing) into Tailwind config and build base shadcn/ui primitives.
   - _Dependencies: Task 1.1._
3. **Task 1.3: Database Schema & Seeding** `[parallel-safe]`
   - Define Drizzle ORM schema for Turso, create indexes, and implement the initial Super Admin seed script.
   - _Dependencies: Task 1.1._
4. **Task 1.4: Authentication & RBAC Core**
   - Configure Better Auth, implement session management, and define server-side `ADMIN` vs `MANAGER` role guards.
   - _Dependencies: Task 1.1, Task 1.3 (Requires DB schema for user table)._
5. **Task 1.5: Core Layouts & Routing Shell**
   - Build `__root`, `_public` (Header/Footer), and `_dashboard` (Sidebar/Topbar) layout routes.
   - _Dependencies: Task 1.2, Task 1.4 (Requires design system and auth to protect the dashboard layout)._

---

### 🔵 Phase 2: Public Marketing Site (SSG & SSR)

_Goal: The complete, public-facing marketing website is live and accessible._

1. **Task 2.1: SSG Static Pages** `[parallel-safe]`
   - Build and statically generate core informational pages (Home, Who We Are, Our Story, Our Solution, Why Ujamaa, SDG 2, Partner With Us).
   - _Dependencies: Phase 1 complete._
2. **Task 2.2: SSR Dynamic Content Pages** `[parallel-safe]`
   - Build server-side rendered list and detail pages for Blogs, Projects, and Careers, implementing `$slug` routing and edge caching.
   - _Dependencies: Phase 1 complete._
3. **Task 2.3: Publications Page** `[parallel-safe]`
   - Build the SSR Publications page to display the list of external research/policy links.
   - _Dependencies: Phase 1 complete._
4. **Task 2.4: Public Contact Form** `[parallel-safe]`
   - Implement the categorized contact form with Zod validation, React Hook Form, Cloudflare Turnstile, and the backend Server Function.
   - _Dependencies: Phase 1 complete._
5. **Task 2.5: Newsletter Subscription** `[parallel-safe]`
   - Implement the publication/newsletter subscription form in the public footer, validating emails and storing them via Server Function.
   - _Dependencies: Phase 1 complete._

---

### 🟣 Phase 3: Dashboard Content Management & Media

_Goal: Internal teams can log in and manage all dynamic public content via the WYSIWYG editor._

1. **Task 3.1: Cloudinary & TipTap Integration**
   - Implement signed upload preset Server Function, configure 30-day Cloudflare edge cache, and build the custom TipTap image extension with graceful error/loading states.
   - _Dependencies: Phase 1 complete. Must be done before content CRUD forms._
2. **Task 3.2: Publications Management CRUD** `[parallel-safe]`
   - Build the simple dashboard form to add, edit, and delete publication metadata and external URLs (Does not require TipTap).
   - _Dependencies: Phase 1 complete._
3. **Task 3.3: Blog Management CRUD**
   - Build dashboard list, create, edit, and delete interfaces for Blogs, including server-side auto-slug generation logic.
   - _Dependencies: Task 3.1 (Requires TipTap/Cloudinary integration)._
4. **Task 3.4: Project Management CRUD** `[parallel-safe]`
   - Build dashboard CRUD interfaces for Projects, reusing the TipTap editor and slug generation logic.
   - _Dependencies: Task 3.1._
5. **Task 3.5: Career Management CRUD** `[parallel-safe]`
   - Build dashboard CRUD interfaces for Careers, including job type and location fields.
   - _Dependencies: Task 3.1._

---

### 🟠 Phase 4: User, Communication & Dashboard Operations

_Goal: The platform is fully operational. Admins manage staff, Managers handle daily ops, and the internal inbox is active._

1. **Task 4.1: Global Error Handling & UX Feedback** `[parallel-safe]`
   - Implement standardized `AppError` catching, React Error Boundaries, and Zustand-powered shadcn toast notifications.
   - _Dependencies: Phase 1 complete. (Can be done early to wrap subsequent tasks)._
2. **Task 4.2: User Management & Strict RBAC** `[parallel-safe]`
   - Build user table and CRUD forms, enforcing server-side restrictions (Managers read/reset non-admins only; Admins do everything).
   - _Dependencies: Phase 1 complete (Auth)._
3. **Task 4.3: Contact Inbox Management**
   - Build the dashboard inbox to view, filter, mark as read, and archive public contact form submissions.
   - _Dependencies: Task 2.4 (Requires the public contact form to be generating data)._
4. **Task 4.4: Dashboard Overview Stats**
   - Implement the overview page, utilizing Cloudflare KV to cache `COUNT()` queries with a 60-second TTL.
   - _Dependencies: Phase 3 complete (Requires content tables to have data to count)._
5. **Task 4.5: Profile & Password Management**
   - Build user profile settings page, allowing users to update details and Managers to execute restricted password resets.
   - _Dependencies: Task 4.2 (Builds upon the User Management foundation)._

---

### 🔴 Phase 5: Optimization, SEO & Edge Performance

_Goal: Production-hardened, fully optimized for search engines, and strictly adhering to infrastructure free-tier constraints._

1. **Task 5.1: Advanced SEO & Meta Tags** `[parallel-safe]`
   - Implement dynamic OpenGraph image generation, structured data (JSON-LD), and automated `sitemap.xml` generation.
   - _Dependencies: Phase 2 complete._
2. **Task 5.2: Edge Caching & Asset Tuning** `[parallel-safe]`
   - Fine-tune Cloudflare Cache Rules for SSR pages, verify 30-day TTL on Cloudinary assets, and implement responsive `srcset`.
   - _Dependencies: Phase 2 & 3 complete._
3. **Task 5.3: TipTap Performance & Autosave** `[parallel-safe]`
   - Implement lazy loading for the TipTap editor bundle and add local storage draft recovery.
   - _Dependencies: Task 3.1 complete._
4. **Task 5.4: Database Query Profiling** `[parallel-safe]`
   - Run Drizzle query profiling to guarantee zero N+1 issues, verify foreign key indexes, and ensure lists exclude heavy HTML columns.
   - _Dependencies: Phase 3 & 4 complete._
5. **Task 5.5: Accessibility & Responsive QA** `[parallel-safe]`
   - Conduct WCAG 2.1 AA compliance checks, refine mobile slide-out dashboard drawer, and ensure public forms have proper `aria-describedby` tags.
   - _Dependencies: Phase 2 & 4 complete._

---

**Scrum Master Note to Agents:**
When picking up a task, check its dependencies. If you are assigned a task that is not **`[parallel-safe]`**, you must verify the preceding tasks are merged and deployed to the staging environment before you begin. If a task requires a schema change or API contract change not explicitly defined in the architecture docs, **STOP and escalate to the Architect.**
