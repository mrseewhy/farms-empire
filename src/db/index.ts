import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

/**
 * Database connection factory.
 *
 * In Cloudflare Workers, environment variables come from the `env` object
 * passed to server functions. For local development, we fall back to
 * process.env or a local SQLite file.
 *
 * IMPORTANT: In Cloudflare Workers, always call createDb(env) with the
 * worker's env bindings. Do NOT use process.env in Worker contexts.
 */
export function createDb(env?: {
  TURSO_DATABASE_URL?: string;
  TURSO_AUTH_TOKEN?: string;
}) {
  const client = createClient({
    url:
      env?.TURSO_DATABASE_URL ??
      process.env.TURSO_DATABASE_URL ??
      "file:local.db",
    authToken: env?.TURSO_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN,
  });

  return drizzle(client, { schema });
}
