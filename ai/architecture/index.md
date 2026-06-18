# Architecture Index

Module: db.md
Contains: The database schema definitions, table structures, indexes, foreign key relationships, and Drizzle ORM configurations for Turso.
Read when: Creating or modifying database tables, handling foreign key reassignments during user deletion, or optimizing Drizzle queries to prevent N+1 issues.

Module: api.md
Contains: Definitions for all TanStack Start Server Functions, including request/response shapes, payload structures, and Cloudflare Worker edge logic.
Read when: Building or modifying backend endpoints for content CRUD, contact form submissions, newsletter subscriptions, or Cloudinary image upload routing.

Module: auth.md
Contains: Better Auth configuration, session management, role-based access control (RBAC) logic, schema integration strategy (Better Auth's built-in user table with extended `role` field), and the initial Super Admin provisioning seed script.
Read when: Implementing login/logout flows, enforcing Admin vs. Manager permissions, handling restricted password resets, securing protected dashboard routes, or understanding how Better Auth's schema integrates with the application tables.

Module: routing.md
Contains: The TanStack Start file-based routing structure, SSG vs. SSR rendering strategies, and dynamic slug generation rules for public and dashboard pages.
Read when: Adding new public pages, configuring dynamic routes for Blogs/Projects/Careers, or setting up the administrative dashboard layout and navigation.

Module: state.md
Contains: Client-side Zustand store definitions for UI state, server-state caching strategies using Cloudflare KV for dashboard stats, and edge caching rules.
Read when: Managing sidebar/toast/theme states, implementing cached dashboard statistics, or configuring aggressive Cloudflare edge caching for Cloudinary and SSR pages.

Module: security.md
Contains: Server-side RBAC enforcement, Cloudflare Turnstile integration for public forms, input validation rules, and environment variable handling.
Read when: Securing API mutations against unauthorized access, protecting public forms from spam, or ensuring client-side UI restrictions are properly backed by server-side validation.

Module: performance.md
Contains: Strategies for Cloudflare Worker CPU/memory optimization, Turso read/write unit efficiency, TipTap WYSIWYG lazy loading, and Cloudinary free-tier bandwidth protection.
Read when: Optimizing database queries, configuring image transformation caching, handling large WYSIWYG content, or ensuring public pages meet SEO and LCP performance targets.

Module: errors.md
Contains: Global error catching mechanisms, graceful failure handling for TipTap image uploads, logging strategies, and user-facing error surface rules.
Read when: Implementing error boundaries, handling Cloudinary upload timeouts without losing draft content, or standardizing API error responses for the dashboard.
