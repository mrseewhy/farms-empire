1. **[Missing Requirements]** The "Publications" page references downloadable research papers in the content document; do Publications require PDF file upload capabilities in the dashboard, or are they just text links to external URLs?

They are just links

2. **[Missing Requirements]** The "Out of Scope" section states automated email marketing is out of scope but mentions the system will "store publication subscriptions"; what is the exact expected backend behavior for these subscriptions if no emails are being dispatched?

A simple newsletter subscription form will need to be added to this and details will be captured in the backend

3. **[Missing Business Logic]** When a Manager or Admin creates a new Blog, Career, or Project, is there an approval workflow (e.g., Manager creates a Draft that an Admin must Publish), or can Managers publish content directly to the live site?

Managers can push directly to live without approval. Only difference between manager and admin is that admin can create and delete users

4. **[Missing Business Logic]** When generating dynamic slugs for Blogs, Careers, and Projects, what is the exact rule for handling duplicate titles (e.g., auto-append a timestamp/number, or require the user to manually resolve the conflict)? auto-append a number like -2 for instance is there is a farm-is-good then then a duplicate will be farm-is-good-1 another duplicate will be farm-is-good-2 etc

5. **[Missing Business Logic]** When a Manager updates a User, what specific fields are they permitted to modify (e.g., can they change a user's role, reset passwords, or only update basic profile info like name)?
   A manager can only read users. reset password for users that are not admin. only admins can do every other thing.

6. **[Missing User Roles]** Do external partners (Landowners, Investors, Community Reps) require an authenticated portal to log in and view their specific project data and financial returns, or is the public site purely informational for them?

No external users

7. **[Missing User Roles]** How is the initial "Super Admin" account provisioned, authenticated, and secured during the very first deployment of the application?

Admin in this case works as a super admin

8. **[Missing Edge Cases]** If an Admin deletes a User who has previously authored Blogs or Projects, what happens to the `author_id` foreign key on those existing records (e.g., set to null, reassign to the deleting Admin, or block the deletion)?
   reassign to the deleting Admin

9. **[Missing Edge Cases]** If an image upload to Cloudinary fails or times out while a user is actively typing in the TipTap WYSIWYG editor, how should the UI handle the error and prevent the user from losing their drafted content?
   Yes

10. **[Ambiguous Constraints]** The spec mandates staying within Cloudinary's free tier limits while also requiring "on-the-fly image optimization"; since transformations consume Cloudinary credits, should we implement aggressive edge caching to prevent high-traffic pages from exhausting the free tier?

Protect cloudniary credit so we do not have to pay

11. **[Ambiguous Constraints]** The spec requires respecting Turso's read/write limits while also demanding "Quick stats" (Total Blogs, Open Careers, etc.) on the Dashboard Overview; should these stats be calculated via real-time `COUNT()` queries on every load, or cached/materialized to minimize database reads?

This decision should be based on which uses the database less.

12. **[Ambiguous Constraints]** The spec lists pages like "Home" and "Who We Are" as "Static/SEO-optimized" but also states public pages must be "server-side rendered (SSR) or statically generated"; which specific rendering strategy (SSG vs SSR) should be applied to the purely static content pages versus the dynamic content pages?
    Use the best method to generate static content, put SEO as priority then speed
