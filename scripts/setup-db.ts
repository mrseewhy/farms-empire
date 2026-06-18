#!/usr/bin/env node

/**
 * Database setup script for Farms Empire.
 *
 * Execution order:
 *   1. Initialize Better Auth (creates user, session, account, verification tables)
 *   2. Run Drizzle migrations (creates application tables + FK constraints)
 *   3. Seed Super Admin (if INITIAL_ADMIN_EMAIL is set)
 *
 * Usage:
 *   npx tsx scripts/setup-db.ts
 *
 * Environment variables:
 *   TURSO_DATABASE_URL  - Turso database URL (or file:local.db for local dev)
 *   TURSO_AUTH_TOKEN    - Turso auth token (optional for local dev)
 *   INITIAL_ADMIN_EMAIL - If set, seeds the Super Admin account
 *   INITIAL_ADMIN_PASSWORD - Password for the Super Admin
 */

import { createClient } from "@libsql/client";

// ────────────────────────────────────────────────────────
// Config
// ────────────────────────────────────────────────────────

const TURSO_URL =
  process.env.TURSO_DATABASE_URL ?? "file:local.db";
const TURSO_AUTH = process.env.TURSO_AUTH_TOKEN;

// ────────────────────────────────────────────────────────
// 1. Create Better Auth tables
// ────────────────────────────────────────────────────────

async function createBetterAuthTables(client: ReturnType<typeof createClient>) {
  console.log("🔐 Step 1: Creating Better Auth tables...");

  const authStatements = [
    `CREATE TABLE IF NOT EXISTS "user" (
      "id" text PRIMARY KEY NOT NULL,
      "name" text NOT NULL,
      "email" text NOT NULL,
      "emailVerified" integer NOT NULL,
      "image" text,
      "createdAt" integer NOT NULL,
      "updatedAt" integer NOT NULL
    )`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "user_email_idx" ON "user" ("email")`,

    `CREATE TABLE IF NOT EXISTS "session" (
      "id" text PRIMARY KEY NOT NULL,
      "expiresAt" integer NOT NULL,
      "token" text NOT NULL,
      "userId" text NOT NULL,
      "ipAddress" text,
      "userAgent" text,
      "createdAt" integer NOT NULL,
      "updatedAt" integer NOT NULL
    )`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "session_token_idx" ON "session" ("token")`,
    `CREATE INDEX IF NOT EXISTS "session_userId_idx" ON "session" ("userId")`,

    `CREATE TABLE IF NOT EXISTS "account" (
      "id" text PRIMARY KEY NOT NULL,
      "accountId" text NOT NULL,
      "providerId" text NOT NULL,
      "userId" text NOT NULL,
      "accessToken" text,
      "refreshToken" text,
      "idToken" text,
      "accessTokenExpiresAt" integer,
      "refreshTokenExpiresAt" integer,
      "password" text,
      "createdAt" integer NOT NULL,
      "updatedAt" integer NOT NULL
    )`,
    `CREATE INDEX IF NOT EXISTS "account_userId_idx" ON "account" ("userId")`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "account_accountId_providerId_idx" ON "account" ("accountId", "providerId")`,

    `CREATE TABLE IF NOT EXISTS "verification" (
      "id" text PRIMARY KEY NOT NULL,
      "identifier" text NOT NULL,
      "value" text NOT NULL,
      "expiresAt" integer NOT NULL,
      "createdAt" integer,
      "updatedAt" integer
    )`,
    `CREATE INDEX IF NOT EXISTS "verification_identifier_idx" ON "verification" ("identifier")`,
  ];

  for (const stmt of authStatements) {
    await client.execute(stmt);
  }

  console.log("   ✅ Better Auth tables created (user, session, account, verification)");
}

// ────────────────────────────────────────────────────────
// 2. Run Drizzle migrations via drizzle-kit's migrate()
// ────────────────────────────────────────────────────────

async function runDrizzleMigrations(
  client: ReturnType<typeof createClient>
) {
  console.log("📦 Step 2: Running Drizzle migrations...");

  const { migrate } = await import("drizzle-kit/libsql");
  const { drizzle } = await import("drizzle-orm/libsql");
  const schema = await import("../src/db/schema");

  const db = drizzle(client, { schema });

  await migrate(db, {
    migrationsFolder: "./drizzle",
  });

  console.log("   ✅ All Drizzle migrations applied");
}

// ────────────────────────────────────────────────────────
// 3. Seed Super Admin
// ────────────────────────────────────────────────────────

async function seedAdmin(client: ReturnType<typeof createClient>) {
  const email = process.env.INITIAL_ADMIN_EMAIL;
  const password = process.env.INITIAL_ADMIN_PASSWORD;

  if (!email || !password) {
    console.log("⏭️  Step 3: Skipping Super Admin seed (no INITIAL_ADMIN_EMAIL set)");
    return;
  }

  console.log(`👤 Step 3: Seeding Super Admin (${email})...`);

  const existing = await client.execute({
    sql: `SELECT "id" FROM "user" WHERE "email" = ?`,
    args: [email],
  });

  if (existing.rows.length > 0) {
    console.log("   ⏭️  Super Admin already exists, skipping");
    return;
  }

  const { hashPassword } = await import("better-auth/crypto");
  const hashedPassword = await hashPassword(password);

  const userId = crypto.randomUUID();
  const now = Date.now();

  await client.execute({
    sql: `INSERT INTO "user" ("id", "name", "email", "emailVerified", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, ?)`,
    args: [userId, "Super Admin", email, 1, now, now],
  });

  await client.execute({
    sql: `INSERT INTO "account" ("id", "accountId", "providerId", "userId", "password", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, ?, ?)`,
    args: [
      crypto.randomUUID(),
      email,
      "credential",
      userId,
      hashedPassword,
      now,
      now,
    ],
  });

  console.log("   ✅ Super Admin seeded successfully");
}

// ────────────────────────────────────────────────────────
// Main
// ────────────────────────────────────────────────────────

async function main() {
  console.log("🌾 Farms Empire — Database Setup");
  console.log(`   Database: ${TURSO_URL}`);
  console.log("");

  const client = createClient({
    url: TURSO_URL,
    authToken: TURSO_AUTH,
  });

  try {
    await createBetterAuthTables(client);
    await runDrizzleMigrations(client);
    await seedAdmin(client);

    console.log("");
    console.log("🎉 Database setup complete!");
  } catch (err) {
    console.error("");
    console.error("❌ Database setup failed:");
    console.error(err);
    process.exit(1);
  } finally {
    client.close();
  }
}

main();
