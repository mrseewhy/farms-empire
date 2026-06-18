# Architecture Modules: Farms Empire Web Platform

Below are the exhaustive architectural definitions for the remaining modules. These documents serve as the absolute technical truth for implementation.

---

# API Architecture (`api.md`)

This module defines all TanStack Start Server Functions. Since TanStack Start uses Server Functions rather than traditional REST endpoints, these are defined as typed, callable async functions that execute on Cloudflare Workers.

## 1. Authentication Functions

### `loginUser`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ email: string, password: string }`
- **Response:** `{ success: boolean, session: SessionObject | null, error?: string }`
- **Description:** Validates credentials via Better Auth, creates a session, and sets the secure HTTP-only session cookie.

### `logoutUser`

- **Auth Required:** Yes
- **Role:** Any
- **Request:** `void`
- **Response:** `{ success: boolean }`
- **Description:** Invalidates the current Better Auth session and clears the session cookie.

### `getSession`

- **Auth Required:** No (Returns null if unauthenticated)
- **Role:** Any
- **Request:** `void`
- **Response:** `{ user: { id, name, email, role } | null }`
- **Description:** Retrieves the current user's session data from the Better Auth cookie and database.

## 2. User Management Functions

### `listUsers`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ page: number, limit: number, search?: string }`
- **Response:** `{ users: User[], total: number }`
- **Description:** Fetches paginated user list. Managers can read; Admins can read.

### `createUser`

- **Auth Required:** Yes
- **Role:** `ADMIN`
- **Request:** `{ name: string, email: string, password: string, role: 'ADMIN' | 'MANAGER' }`
- **Response:** `{ user: User }`
- **Description:** Creates a new internal staff account. Hashes password via Better Auth. Blocked for Managers.

### `updateUser`

- **Auth Required:** Yes
- **Role:** `ADMIN`
- **Request:** `{ id: string, name?: string, email?: string, role?: 'ADMIN' | 'MANAGER' }`
- **Response:** `{ user: User }`
- **Description:** Updates user profile or role. Managers cannot execute this.

### `resetUserPassword`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ userId: string, newPassword: string }`
- **Response:** `{ success: boolean }`
- **Description:** Resets a user's password. **Logic:** If the caller is a `MANAGER`, the server must explicitly verify that the target `userId` does not belong to an `ADMIN`. If it does, it throws a `403 Forbidden`.

### `deleteUser`

- **Auth Required:** Yes
- **Role:** `ADMIN`
- **Request:** `{ userId: string }`
- **Response:** `{ success: boolean }`
- **Description:** Deletes a user. **Logic:** Must run in a Drizzle transaction. First, updates `blogs` and `projects` setting `author_id` to the `caller's id`. Then deletes the user. Blocked for Managers.

## 3. Content Management Functions (Blogs, Projects, Careers)

_(Note: `createContent`, `updateContent`, `deleteContent`, `getContent`, `listContent` follow the exact same pattern for Blogs, Projects, and Careers. Detailed below for Blogs, applied identically to the others)._

### `listBlogs`

- **Auth Required:** No (Public) / Yes (Dashboard)
- **Role:** Public / `ADMIN` / `MANAGER`
- **Request:** `{ page: number, limit: number, status?: 'DRAFT' | 'PUBLISHED', authorId?: string }`
- **Response:** `{ blogs: BlogSummary[], total: number }`
- **Description:** Public calls automatically filter `status = 'PUBLISHED'`. Dashboard calls can filter by draft/author.

### `getBlogBySlug`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ slug: string }`
- **Response:** `{ blog: BlogDetail | null }`
- **Description:** Fetches a single published blog by its unique slug for the public detail page.

### `createBlog`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ title: string, excerpt?: string, content: string, cover_image_url?: string, status: 'DRAFT' | 'PUBLISHED' }`
- **Response:** `{ blog: Blog }`
- **Description:** Creates a blog. **Logic:** Auto-generates the `slug` from the title. If the slug exists, appends `-1`, `-2`, etc. Sets `author_id` to the caller's ID.

### `updateBlog`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string, title?: string, excerpt?: string, content?: string, cover_image_url?: string, status?: 'DRAFT' | 'PUBLISHED' }`
- **Response:** `{ blog: Blog }`
- **Description:** Updates blog details. If the title changes, regenerates and checks slug uniqueness.

### `deleteBlog`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ success: boolean }`
- **Description:** Hard deletes the blog post.

## 4. Public Engagement Functions

### `submitContactForm`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ full_name: string, organization?: string, email: string, phone: string, category: ContactCategory, subject: string, message: string, turnstileToken: string }`
- **Response:** `{ success: boolean, id: string }`
- **Description:** Validates Cloudflare Turnstile token, then inserts the contact submission into the `contacts` table.

### `subscribeNewsletter`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ email: string, turnstileToken: string }`
- **Response:** `{ success: boolean, message: string }`
- **Description:** Validates Turnstile token. Checks if email already exists in `subscriptions`. If not, inserts it. Returns success regardless to prevent email enumeration.

## 5. Media & Utility Functions

### `getCloudinaryUploadSignature`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ folder: string }`
- **Response:** `{ signature: string, timestamp: number, cloudName: string, apiKey: string, folder: string }`
- **Description:** Generates a secure signature for direct client-to-Cloudinary uploads, preventing Worker CPU overload from image processing.

### `getDashboardStats`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `void`
- **Response:** `{ totalBlogs: number, openCareers: number, unreadContacts: number, totalUsers: number }`
- **Description:** Fetches aggregated counts. **Logic:** Checks Cloudflare KV cache first. If missing, queries Turso, caches result for 60 seconds, and returns.

---

# Auth Architecture (`auth.md`)

This module defines the authentication lifecycle, session management, and Role-Based Access Control (RBAC) using Better Auth.

## 1. Better Auth Configuration

- **Provider:** Better Auth with custom Drizzle adapter for Turso.
- **Session Strategy:** JWT stored in an `HttpOnly`, `Secure`, `SameSite=Lax` cookie.
- **User Model Extension:** Extends the default Better Auth user schema with a `role` column (`text`, default `'MANAGER'`).

## 2. Authentication Flows

### Login

1. User submits email/password to `loginUser` server function.
2. Better Auth verifies credentials against the `password_hash` in Turso.
3. On success, a session record is created in the `sessions` table, and the session cookie is set in the response headers.
4. Client redirects to `/dashboard`.

### Session Validation (Middleware)

1. Every protected Server Function and protected Route Loader calls `auth.api.getSession({ headers })`.
2. If the session is invalid or expired, it throws an `UNAUTHORIZED` error.
3. If valid, it extracts the `user.role` for RBAC checks.

### Logout

1. User triggers `logoutUser`.
2. Better Auth invalidates the session in the database.
3. The session cookie is cleared via `Set-Cookie` with an expired date.

## 3. Role-Based Access Control (RBAC) Enforcement

RBAC is enforced at two distinct layers. **The server layer is the only security boundary.**

### Server-Side Enforcement (Security Boundary)

Every protected Server Function includes a guard clause:

```typescript
const session = await auth.api.getSession({ headers });
if (!session) throw new AuthError("UNAUTHORIZED");
if (requiredRole === "ADMIN" && session.user.role !== "ADMIN")
  throw new AuthError("FORBIDDEN");
```

### Client-Side Enforcement (UX Only)

- The `useSession` hook provides the user's role to React components.
- Components conditionally render UI (e.g., hiding the "Delete User" button for Managers).
- _Rule:_ Client-side hiding does not prevent API calls if a user manipulates the DOM or network requests.

## 4. Initial Super Admin Provisioning

- **Trigger:** Executed via a dedicated TanStack Start CLI command or a one-time server function on first deployment.
- **Logic:**
  1. Reads `INITIAL_ADMIN_EMAIL` and `INITIAL_ADMIN_PASSWORD` from Cloudflare environment variables.
  2. Queries the `users` table. If `count === 0`, it hashes the password and inserts the user with `role = 'ADMIN'`.
  3. If `count > 0`, it aborts to prevent duplicate admins.
- **Post-Deployment:** The environment variables must be manually deleted from the Cloudflare dashboard by the DevOps engineer immediately after seeding.

---
