- **Classification:** Complex

- **Reason:** The project is classified as Complex because it features a secure, role-restricted administrative dashboard with distinct RBAC permissions, multi-entity CRUD operations, and internal workflows for content and user management.

- **Document set required:**
  - **Configuration:** `package.json`, `tsconfig.json`, `tailwind.config.ts`, `drizzle.config.ts`, `app.config.ts`, `.env.example`
  - **Database & Auth:** `src/db/schema.ts`, `src/db/index.ts`, `src/lib/auth.ts`
  - **Server Functions (API):** `src/server/functions/auth.ts`, `src/server/functions/users.ts`, `src/server/functions/blogs.ts`, `src/server/functions/projects.ts`, `src/server/functions/careers.ts`, `src/server/functions/contacts.ts`, `src/server/functions/cloudinary.ts`, `src/server/functions/stats.ts`
  - **Public Routes (SSG/SSR):** `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/who-we-are.tsx`, `src/routes/our-story.tsx`, `src/routes/our-solution.tsx`, `src/routes/why-ujamaa.tsx`, `src/routes/sdg-2.tsx`, `src/routes/partner-with-us.tsx`, `src/routes/publications.tsx`, `src/routes/contact.tsx`, `src/routes/blog/index.tsx`, `src/routes/blog/$slug.tsx`, `src/routes/careers/index.tsx`, `src/routes/careers/$slug.tsx`, `src/routes/projects/index.tsx`, `src/routes/projects/$slug.tsx`
  - **Dashboard Routes:** `src/routes/dashboard/index.tsx`, `src/routes/dashboard/users.tsx`, `src/routes/dashboard/blogs.tsx`, `src/routes/dashboard/blogs.$id.tsx`, `src/routes/dashboard/projects.tsx`, `src/routes/dashboard/projects.$id.tsx`, `src/routes/dashboard/careers.tsx`, `src/routes/dashboard/careers.$id.tsx`, `src/routes/dashboard/contacts.tsx`
  - **Core Components:** `src/components/editor/TipTapEditor.tsx`, `src/components/layout/PublicLayout.tsx`, `src/components/layout/DashboardLayout.tsx`, `src/components/ui/` (shadcn components)
