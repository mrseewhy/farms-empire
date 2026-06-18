-- Foreign key constraints for author_id columns.
-- These reference Better Auth's "user" table, which is created at runtime
-- by Better Auth, not by the initial migration. Run this migration AFTER
-- Better Auth has initialized its schema.

ALTER TABLE `blogs` ADD CONSTRAINT `fk_blogs_author`
  FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE cascade;
--> statement-breakpoint
ALTER TABLE `projects` ADD CONSTRAINT `fk_projects_author`
  FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE cascade;
