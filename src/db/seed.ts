import { createClient } from "@libsql/client";
import { hashPassword } from "better-auth/crypto";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL ?? "file:local.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

/**
 * Seed script for the Farms Empire database.
 *
 * Creates the initial Super Admin user in Better Auth's `user` table
 * and corresponding `account` record for credential-based login.
 * Run once on first deployment.
 *
 * Usage: npx tsx src/db/seed.ts
 */
async function seed() {
  const email = process.env.INITIAL_ADMIN_EMAIL;
  const password = process.env.INITIAL_ADMIN_PASSWORD;

  if (!email || !password) {
    console.error(
      "Error: INITIAL_ADMIN_EMAIL and INITIAL_ADMIN_PASSWORD must be set."
    );
    process.exit(1);
  }

  // Check if any users exist in Better Auth's user table
  const result = await client.execute("SELECT COUNT(*) as count FROM user");
  const count = result.rows[0]?.count as number;

  if (count > 0) {
    console.log("User table is not empty. Skipping seed.");
    process.exit(0);
  }

  console.log("Seeding initial Super Admin user...");

  const hashedPassword = await hashPassword(password);
  const userId = crypto.randomUUID();
  const now = new Date();

   // Insert user record (no password column - Better Auth stores passwords in account table)
  await client.execute({
    sql: `INSERT INTO user (id, name, email, "emailVerified", role, createdAt, updatedAt)
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
    args: [
      userId,
      "System Administrator",
      email,
      1,
      "ADMIN",
      now.getTime(),
      now.getTime(),
    ],
  });

  // Insert account record with hashed password for credential-based login
  await client.execute({
    sql: `INSERT INTO account (id, userId, accountId, providerId, password)
          VALUES (?, ?, ?, ?, ?)`,
    args: [
      crypto.randomUUID(),
      userId,
      email,
      "credential",
      hashedPassword,
    ],
  });

  console.log(`Super Admin created with email: ${email}`);
  console.log(
    "IMPORTANT: Delete INITIAL_ADMIN_EMAIL and INITIAL_ADMIN_PASSWORD from Cloudflare dashboard."
  );

  process.exit(0);
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
