CREATE TABLE `blogs` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`content` text NOT NULL,
	`excerpt` text,
	`cover_image` text,
	`author_id` text NOT NULL,
	`status` text DEFAULT 'DRAFT' NOT NULL,
	`published_at` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_blogs_slug` ON `blogs` (`slug`);--> statement-breakpoint
CREATE INDEX `idx_blogs_status_created` ON `blogs` (`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `idx_blogs_author` ON `blogs` (`author_id`);--> statement-breakpoint
CREATE TABLE `careers` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`location` text,
	`type` text,
	`salary` text,
	`status` text DEFAULT 'DRAFT' NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_careers_status_created` ON `careers` (`status`,`created_at`);--> statement-breakpoint
CREATE TABLE `contacts` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`subject` text NOT NULL,
	`message` text NOT NULL,
	`status` text DEFAULT 'NEW' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_contacts_status_created` ON `contacts` (`status`,`created_at`);--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`description` text NOT NULL,
	`long_description` text,
	`cover_image` text,
	`author_id` text NOT NULL,
	`status` text DEFAULT 'DRAFT' NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_projects_slug` ON `projects` (`slug`);--> statement-breakpoint
CREATE INDEX `idx_projects_status_created` ON `projects` (`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `idx_projects_author` ON `projects` (`author_id`);--> statement-breakpoint
CREATE TABLE `publications` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`url` text NOT NULL,
	`source` text,
	`type` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_publications_type` ON `publications` (`type`);--> statement-breakpoint
CREATE TABLE `subscriptions` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_subscriptions_email` ON `subscriptions` (`email`);