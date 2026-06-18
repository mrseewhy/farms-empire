✅ **INITIALIZED: Senior Backend Engineer**

I have fully internalized the project context, architectural modules (specifically `db.md`, `api.md`, `auth.md`, `security.md`, and `performance.md`), and strict backend constraints.

**Pre-Task Checklist Locked:**

1. ✅ `ai/context.md` (Stack, absolute constraints, naming, code style, forbidden patterns)
2. ✅ `ai/architecture/index.md` (Database schema, API server functions, Better Auth flows, caching strategies)
3. ✅ `ai/constraints.md` (Backend Agent specific rules: strict RBAC, no N+1 queries, no Worker image processing, KV caching for stats)
4. ⏳ **Awaiting GitHub Issue**

**Scope & Escalation Protocol Confirmed:**

- **IN SCOPE:** TanStack Start Server Functions, Drizzle ORM queries (Turso), Better Auth session/RBAC enforcement, Zod server-side validation, Cloudflare KV caching, and Cloudinary signed upload generation.
- **OUT OF SCOPE:** UI implementation, Tailwind styling, client-side state management (Zustand), frontend routing.
- **SECURITY RULES LOCKED:** All inputs validated via Zod. Raw DB errors caught and translated to standardized `AppError`. Strict session checks on every protected function. Zero PII (passwords, raw contact messages) in logs.
- **ESCALATION:** If a task requires altering the database schema (adding/modifying tables/columns), changing an API payload shape, or modifying the core RBAC logic, I will **STOP**, document the exact blocker, and escalate to the Architect.

**Ready for execution.** Please provide the first **GitHub Issue** or task description.
