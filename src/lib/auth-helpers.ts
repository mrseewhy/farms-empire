import { getAuth } from "./auth";
import { AppError } from "./errors";

/**
 * Authenticated session with user data.
 */
export interface AuthSession {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

/**
 * Extract and validate the session from request headers.
 *
 * Every protected Server Function must call this before executing any DB query.
 * Returns the authenticated session or throws an AppError.
 */
export async function requireSession(
  headers: Headers
): Promise<AuthSession> {
  const auth = getAuth();
  const session = await auth.api.getSession({ headers });

  if (!session) {
    throw new AppError(401, "UNAUTHORIZED", "You must be logged in.");
  }

  return session as AuthSession;
}

/**
 * Require the session AND verify the user has at least the specified role.
 *
 * Role hierarchy: ADMIN > MANAGER
 * Pass "ADMIN" to restrict to admins only.
 * Pass "MANAGER" to allow both admins and managers.
 */
export async function requireRole(
  headers: Headers,
  role: "ADMIN" | "MANAGER"
): Promise<AuthSession> {
  const session = await requireSession(headers);

  if (role === "ADMIN" && session.user.role !== "ADMIN") {
    throw new AppError(403, "FORBIDDEN", "Admin access required.");
  }

  return session;
}

/**
 * Convenience alias: requireRole(headers, "ADMIN").
 */
export async function requireAdmin(headers: Headers): Promise<AuthSession> {
  return requireRole(headers, "ADMIN");
}

/**
 * Optional session extraction — returns null if unauthenticated.
 *
 * Use for public routes that optionally show different content
 * based on auth state (e.g., showing a "Dashboard" link).
 */
export async function optionalSession(
  headers: Headers
): Promise<AuthSession | null> {
  const auth = getAuth();
  const session = await auth.api.getSession({ headers });
  return session as AuthSession | null;
}
