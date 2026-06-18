import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createDb } from "@/db/index";

/**
 * Better Auth configuration for Farms Empire.
 *
 * Uses Drizzle adapter with Turso (libSQL/SQLite).
 * Extends the default user schema with a `role` column (ADMIN / MANAGER).
 *
 * In Cloudflare Workers, pass the env bindings when calling createAuth(env).
 * For non-Worker contexts (CLI, tests), the default export works with process.env.
 */
export function createAuth(env?: {
  BETTER_AUTH_SECRET?: string;
  TURSO_DATABASE_URL?: string;
  TURSO_AUTH_TOKEN?: string;
  TRUSTED_ORIGINS?: string;
}) {
  const db = createDb(env);

  // Parse trusted origins from env (comma-separated) or use defaults
  const defaultOrigins = ["http://localhost:3000", "https://farmsempire.africa"];
  const envOrigins = env?.TRUSTED_ORIGINS ?? process.env.TRUSTED_ORIGINS;
  const trustedOrigins = envOrigins
    ? envOrigins.split(",").map((o) => o.trim())
    : defaultOrigins;

  return betterAuth({
    database: drizzleAdapter(db, { provider: "sqlite" }),
    secret: env?.BETTER_AUTH_SECRET ?? process.env.BETTER_AUTH_SECRET ?? "",
    session: {
      expiresIn: 60 * 60 * 24 * 7, // 7 days
      updateAge: 60 * 60 * 24, // 1 day
    },
    user: {
      additionalFields: {
        role: {
          type: "string",
          required: false,
          defaultValue: "MANAGER",
          input: false, // Role is set server-side only, not by client signup
        },
      },
    },
    trustedOrigins,
  });
}

// Lazy singleton for non-Worker contexts (e.g., CLI, tests).
// In Cloudflare Workers, always use createAuth(env) directly.
let _auth: ReturnType<typeof createAuth> | null = null;
export function getAuth() {
  _auth ??= createAuth();
  return _auth;
}
