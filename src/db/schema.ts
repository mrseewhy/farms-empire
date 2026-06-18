import { sqliteTable, text, integer, index, uniqueIndex } from "drizzle-orm/sqlite-core";

// ────────────────────────────────────────────────────────
// Enum-like string unions (SQLite doesn't have native enums)
// ────────────────────────────────────────────────────────

export type BlogStatus = "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
export type ProjectStatus = "DRAFT" | "ACTIVE" | "ARCHIVED";
export type CareerStatus = "OPEN" | "CLOSED" | "DRAFT";
export type ContactStatus = "NEW" | "REPLIED" | "ARCHIVED";
export type PublicationType = "NEWSLETTER" | "REPORT" | "ARTICLE";

// ────────────────────────────────────────────────────────
// Blogs
// ────────────────────────────────────────────────────────

export const blogs = sqliteTable(
  "blogs",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    content: text("content").notNull(),
    excerpt: text("excerpt"),
    coverImage: text("cover_image"),
    authorId: text("author_id").notNull(),
    status: text("status").notNull().default("DRAFT"),
    publishedAt: integer("published_at", { mode: "timestamp" }),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [
    // FK: authorId → Better Auth's "user" table (added in migration, not schema,
    // because Better Auth manages its own user table independently)
    index("idx_blogs_slug").on(t.slug),
    index("idx_blogs_status_created").on(t.status, t.createdAt),
    index("idx_blogs_author").on(t.authorId),
  ],
);

// ────────────────────────────────────────────────────────
// Projects
// ────────────────────────────────────────────────────────

export const projects = sqliteTable(
  "projects",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    description: text("description").notNull(),
    longDescription: text("long_description"),
    coverImage: text("cover_image"),
    authorId: text("author_id").notNull(),
    status: text("status").notNull().default("DRAFT"),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [
    // FK: authorId → Better Auth's "user" table (added in migration)
    index("idx_projects_slug").on(t.slug),
    index("idx_projects_status_created").on(t.status, t.createdAt),
    index("idx_projects_author").on(t.authorId),
  ],
);

// ────────────────────────────────────────────────────────
// Careers
// ────────────────────────────────────────────────────────

export const careers = sqliteTable(
  "careers",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    location: text("location"),
    type: text("type"),
    salary: text("salary"),
    status: text("status").notNull().default("DRAFT"),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [
    index("idx_careers_status_created").on(t.status, t.createdAt),
  ],
);

// ────────────────────────────────────────────────────────
// Contact Messages
// ────────────────────────────────────────────────────────

export const contacts = sqliteTable(
  "contacts",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    subject: text("subject").notNull(),
    message: text("message").notNull(),
    status: text("status").notNull().default("NEW"),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [
    index("idx_contacts_status_created").on(t.status, t.createdAt),
  ],
);

// ────────────────────────────────────────────────────────
// Subscriptions
// ────────────────────────────────────────────────────────

export const subscriptions = sqliteTable(
  "subscriptions",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [uniqueIndex("idx_subscriptions_email").on(t.email)],
);

// ────────────────────────────────────────────────────────
// Publications (External Media)
// ────────────────────────────────────────────────────────

export const publications = sqliteTable(
  "publications",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    url: text("url").notNull(),
    source: text("source"),
    type: text("type"),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [index("idx_publications_type").on(t.type)],
);

