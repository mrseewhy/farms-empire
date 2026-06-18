# Agent Constraints Document: Farms Empire Web Platform

## Frontend Agent

1. Never store server-fetched data in Zustand; use TanStack Start server functions and React Suspense/Query for all data fetching.
2. Use only Tailwind utility classes and shadcn/ui components; never use inline styles, CSS modules, or styled-components.
3. Never use raw `<img>` tags for Cloudinary assets; always use the optimized `Image` component with `f_auto` and `q_auto` parameters.
4. Never block the main UI thread during TipTap image uploads; always render a loading placeholder node while the background upload occurs.
5. Validate all public form inputs (Contact, Newsletter) using Zod schemas integrated with React Hook Form before allowing submission.

## Backend Agent

1. Every protected Server Function must explicitly call `auth.api.getSession()` and verify the user's role before executing any database query.
2. Never use raw SQL strings or execute multiple sequential queries for related data; always use Drizzle ORM's relational query builder (`with: {}`) to prevent N+1 issues.
3. Never process, resize, or compress images within the Cloudflare Worker; always return a signed Cloudinary upload preset to the client.
4. Dashboard statistics must be fetched from Cloudflare KV first, falling back to Turso only on a cache miss, and must set a strict 60-second TTL.
5. When creating or updating content, the slug generation logic must query the database for existing slugs and append an incremental integer (e.g., `-1`, `-2`) if a collision is detected.

## Test Writer Agent

1. Every Drizzle ORM query in a Server Function must have a corresponding unit test verifying the generated SQL does not contain N+1 patterns.
2. Every protected Server Function must have a test case asserting that a request with a missing or invalid Better Auth session returns a 401 Unauthorized error.
3. User management Server Functions must have test cases verifying that a `MANAGER` role receives a 403 Forbidden error when attempting to create or delete a user.
4. TipTap custom image extension tests must verify that a simulated upload timeout results in an `error-image` node without crashing the editor or losing typed text.
5. Public form submission tests must assert that invalid Cloudflare Turnstile tokens result in a rejected promise before any database insertion occurs.

## QA Agent

1. Verify that Lighthouse performance scores for SSG public pages remain above 95 and SSR dynamic pages remain above 85 under simulated 4G network conditions.
2. Attempt to bypass UI restrictions by directly calling restricted Server Functions (e.g., `deleteUser`) via the browser console using a `MANAGER` session token and verify the server rejects it.
3. Verify that deleting a user who has authored blogs correctly reassigns the `author_id` of those blogs to the deleting admin's ID without orphaning the records.
4. Inspect the HTTP response headers for Cloudinary image URLs and verify the `Cache-Control` directive enforces a 30-day edge TTL.
5. Submit the public contact form and newsletter subscription form with missing required fields and verify that inline Zod validation errors appear without triggering a network request.

## Reviewer Agent

1. Reject any pull request that imports Redux, React Context for server data, or Apollo/Relay, as they violate the forbidden state management rules.
2. Reject any file that uses `export default` unless it is strictly required by the TanStack Start route configuration.
3. Reject any Drizzle schema modification that adds a foreign key without a corresponding `ON DELETE` action or missing an index on the foreign key column.
4. Reject any code that references `process.env` for secrets inside client-side components; all secrets must be accessed via Cloudflare Worker environment bindings in Server Functions.
5. Reject any TypeScript file that contains the `any` type or lacks explicit return types for exported Server Functions.

# AI Anti-Patterns & Strict Prohibitions

The following anti-patterns are strictly forbidden in the Farms Empire Web Platform codebase. AI agents must adhere to these rules to ensure performance, security, and maintainability.

### 1. TypeScript Type Safety

**NEVER DO THIS:** Use the `any` type in TypeScript.

```typescript
// BAD
const data: any = await fetchUser();
```

**DO THIS INSTEAD:** Use explicit types, interfaces, or `unknown` with proper type narrowing to maintain strict type safety.

```typescript
// GOOD
const data: User = await fetchUser();
// OR
const data: unknown = await fetchUser();
if (isUser(data)) { ... }
```

### 2. Logging and Debugging

**NEVER DO THIS:** Use `console.log`, `console.warn`, or `console.error` in production code, components, or Server Functions.

```typescript
// BAD
console.log("User logged in:", user);
```

**DO THIS INSTEAD:** Use the designated project logger or rely on Cloudflare's native structured logging for edge environments.

```typescript
// GOOD
import { logger } from "@/lib/logger";
logger.info("User logged in", { userId: user.id });
```

### 3. Styling and UI

**NEVER DO THIS:** Write inline styles using the `style={{}}` prop or create custom CSS/SCSS files.

```tsx
// BAD
<div style={{ marginTop: "16px", color: "#0F4C3A" }}>Text</div>
```

**DO THIS INSTEAD:** Use Tailwind CSS utility classes exclusively, strictly adhering to the defined design system tokens.

```tsx
// GOOD
<div className="mt-4 text-primary">Text</div>
```

### 4. Data Fetching

**NEVER DO THIS:** Use `useEffect` to fetch data from Server Functions or external APIs.

```tsx
// BAD
useEffect(() => {
  fetch("/api/blogs")
    .then((res) => res.json())
    .then(setBlogs);
}, []);
```

**DO THIS INSTEAD:** Use TanStack Start route loaders for initial page data, or TanStack Query (`useQuery`) for client-side data fetching and caching.

```tsx
// GOOD (Route Loader)
export const Route = createFileRoute("/blog")({
  loader: () => listBlogs(),
});
// GOOD (Client Component)
const { data } = useQuery({ queryKey: ["blogs"], queryFn: listBlogs });
```

### 5. Dependency Management

**NEVER DO THIS:** Import libraries, packages, or internal modules that are not explicitly defined in the project's `package.json` or file structure (Hallucinating imports).

```typescript
// BAD
import axios from "axios"; // Not in package.json
import { motion } from "framer-motion"; // Not in package.json
```

**DO THIS INSTEAD:** Only use the approved stack: React, TanStack Start, Zustand, Tailwind, shadcn/ui, TipTap, Drizzle, Better Auth, Zod, React Hook Form, and Cloudinary.

### 6. Error Handling

**NEVER DO THIS:** Use empty `catch {}` blocks or silently ignore rejected promises (Swallowing errors).

```typescript
// BAD
try {
  await createBlog(data);
} catch (e) {
  // silently ignored
}
```

**DO THIS INSTEAD:** Always catch errors, log them using the project logger, and either throw a standardized `AppError` to the client or handle the failure gracefully in the UI.

```typescript
// GOOD
try {
  await createBlog(data);
} catch (error) {
  logger.error("Failed to create blog", { error });
  throw new AppError(500, "CREATE_BLOG_FAILED", "Could not save blog post.");
}
```

### 7. Database Query Optimization

**NEVER DO THIS:** Use `SELECT *` or Drizzle's `db.select()` without specifying columns, especially for tables with large text fields like `content` (HTML).

```typescript
// BAD
const blogs = await db.select().from(blogs); // Fetches massive HTML blobs for list views
```

**DO THIS INSTEAD:** Explicitly select only the required columns to minimize Turso read units and network payload.

```typescript
// GOOD
const blogs = await db
  .select({
    id: blogs.id,
    title: blogs.title,
    slug: blogs.slug,
    status: blogs.status,
  })
  .from(blogs);
```

### 8. Component Architecture

**NEVER DO THIS:** Create monolithic "God components" that exceed 150 lines of code or handle multiple unrelated concerns (data fetching, complex state, and heavy UI rendering).

```tsx
// BAD
export function DashboardPage() {
  // 200+ lines of state, fetchers, handlers, and JSX mixed together
}
```

**DO THIS INSTEAD:** Keep components under 150 lines. Extract UI elements into smaller, reusable shadcn/ui primitives, and separate data-fetching logic into route loaders or custom hooks.

```tsx
// GOOD
export function DashboardPage() {
  const stats = useDashboardStats();
  return (
    <div className="grid gap-6">
      <StatsGrid stats={stats} />
      <RecentActivityFeed />
    </div>
  );
}
```
