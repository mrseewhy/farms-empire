# PROJECT NAME:

Farms Empire Web Platform

# PROJECT DESCRIPTION:

A comprehensive, role-based web application for Farms Empire, an African communal agriculture organization. The platform consists of a highly optimized, SEO-friendly public marketing website detailing their mission, communal farming model, projects, and UN SDG 2 impact, alongside a secure, role-restricted administrative dashboard. The dashboard allows internal teams to manage dynamic content (Blogs, Careers, Projects), user accounts, and public contact form submissions without needing to touch the codebase.

# STACK:

**Frontend:** TanStack Start (React), Zustand (client-side UI state), TipTap (WYSIWYG rich-text editor), shadcn/ui, Tailwind CSS, `@tailwindcss/typography`.
**Backend:** TanStack Start Server Functions / Cloudflare Workers (Edge compute).
**Database:** Turso (Edge-hosted libSQL/SQLite) with Drizzle ORM.
**Hosting:** Cloudflare Pages (Frontend assets) & Cloudflare Workers (Backend/API).
**Styling:** Tailwind CSS, shadcn/ui, `@tailwindcss/typography` (for rendering WYSIWYG HTML content).
**Authentication:** Better Auth (configured with custom role-based access control).
**Media Storage:** Cloudinary (for WYSIWYG image uploads, cover images, and on-the-fly image optimization).

# USER ROLES:

**Admin (Super Admin):** Full system access. Can Create, Read, Update, and Delete (CRUD) Users, Blogs, Careers, Projects, and Contact Submissions.
**Manager:** Restricted access. Can Read and Update (RU) Users (specifically blocked from creating or deleting users). Has full CRUD access to Blogs, Careers, Projects, and Contact Submissions.

# FEATURES:

**Public Marketing Site:**

- Static/SEO-optimized pages: Home, Who We Are, Our Story, Our Solution, Why Ujamaa, UN SDG 2, Partner With Us, Publications, Contact.
- Dynamic pages: Blog (list & detail), Careers (list & detail), Projects (list & detail).
- Public Contact Form with dropdown categorization (Landowner, Community Rep, Investor, etc.).

**Administrative Dashboard:**

- **Overview:** Quick stats (Total Blogs, Open Careers, Unread Contacts, Total Users).
- **User Management:** Table view with strict role-based UI restrictions (Create/Delete buttons hidden for Managers).
- **Content Management:** CRUD interfaces for Blogs, Careers, and Projects utilizing a rich-text WYSIWYG editor (TipTap).
- **Contact Inbox:** View, manage, and mark public contact form submissions as "Read" or archive them.
- **Image Handling:** Seamless image uploading and optimization via Cloudinary directly within the WYSIWYG editor.

# SPECIAL REQUIREMENTS:

**WYSIWYG & Media Integration:** TipTap editor must support drag-and-drop image uploads that automatically route to Cloudinary, optimize the image, and insert the public URL into the HTML content.
**Strict RBAC Enforcement:** Role checks must be enforced on both the UI (hiding restricted buttons) AND the Server/Database level (preventing API bypass via direct calls).
**SEO & Performance:** Public pages must be server-side rendered (SSR) or statically generated with proper meta tags, OpenGraph images, and structured data for search engines.
**Dynamic Slugs:** Blogs, Careers, and Projects must use unique, URL-friendly slugs for public routing (e.g., `/projects/pioneer-community-farm`).

# CONSTRAINTS:

**Cloudflare Workers Limits:** Must adhere to CPU time and memory limits for Workers. Heavy image processing must be offloaded to Cloudinary to prevent Worker timeouts.
**Database Limits:** Must operate efficiently within Turso's read/write unit limits (optimizing Drizzle queries to prevent N+1 issues).
**Cloudinary Limits:** Must stay within the 25GB storage and 25GB monthly bandwidth limits of the free tier.
**No Client-Side Auth Bypass:** All protected dashboard routes and data mutations must be validated server-side using Better Auth sessions.

# OUT OF SCOPE:

- E-commerce functionality or payment gateway integrations (no selling products or processing payments online).
- Native mobile applications (iOS/Android).
- Real-time chat or live messaging between website visitors and support.
- Complex multi-tenant SaaS features (this is a single-organization platform).
- Automated email marketing campaigns or newsletter dispatching (the system will only store contact form data and publication subscriptions).
