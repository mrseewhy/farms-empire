# Auth Architecture (`auth.md`)

This module defines the authentication lifecycle, session management, and Role-Based Access Control (RBAC) using Better Auth.

## 1. Better Auth Configuration

- **Provider:** Better Auth with custom Drizzle adapter for Turso.
- **Session Strategy:** JWT stored in an `HttpOnly`, `Secure`, `SameSite=Lax` cookie.
- **User Model Extension:** Extends the default Better Auth user schema with a `role` column (`text`, default `'MANAGER'`).

### Schema Integration Strategy

Better Auth manages its own `user` and `session` tables internally via the Drizzle adapter. The custom `role` field is added by extending Better Auth's user schema — **not** by creating a separate `users` table.

**Better Auth handles:**
- `user` table (id, name, email, emailVerified, image, createdAt, updatedAt + custom `role` field)
- `session` table (id, userId, expiresAt, createdAt, updatedAt)
- `account` table (id, userId, accountId, providerId, etc.)
- `verification` table (for email verification tokens)

**Application tables (defined in `db.md`):**
- `blogs`, `projects`, `careers`, `contacts`, `subscriptions`, `publications`

The `author_id` foreign keys in `blogs` and `projects` reference Better Auth's `user.id`.

## 2. Authentication Flows

### Login

1. User submits email/password to `loginUser` server function.
2. Better Auth verifies credentials against the password hash in Turso.
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
if (!session) throw new AppError(401, "UNAUTHORIZED", "You must be logged in.");
if (requiredRole === "ADMIN" && session.user.role !== "ADMIN")
  throw new AppError(403, "FORBIDDEN", "Insufficient permissions.");
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

## 5. Environment Variables

| Variable | Type | Description |
|----------|------|-------------|
| `BETTER_AUTH_SECRET` | Secret | Secret key for JWT signing. Stored in Cloudflare Workers Secrets. |
| `INITIAL_ADMIN_EMAIL` | Secret | Email for the initial Super Admin. Delete after first deploy. |
| `INITIAL_ADMIN_PASSWORD` | Secret | Password for the initial Super Admin. Delete after first deploy. |

---

**See also:** `api.md` for the complete list of Server Functions that enforce auth checks.
