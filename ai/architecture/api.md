# API Architecture (`api.md`)

This module defines all TanStack Start Server Functions. Since TanStack Start uses Server Functions rather than traditional REST endpoints, these are defined as typed, callable async functions that execute on Cloudflare Workers.

## 1. Authentication Functions

### `loginUser`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ email: string, password: string }`
- **Response:** `{ success: boolean, session: SessionObject | null, error?: string }`
- **Description:** Validates credentials via Better Auth, creates a session, and sets the secure HTTP-only session cookie.

### `logoutUser`

- **Auth Required:** Yes
- **Role:** Any
- **Request:** `void`
- **Response:** `{ success: boolean }`
- **Description:** Invalidates the current Better Auth session and clears the session cookie.

### `getSession`

- **Auth Required:** No (Returns null if unauthenticated)
- **Role:** Any
- **Request:** `void`
- **Response:** `{ user: { id, name, email, role } | null }`
- **Description:** Retrieves the current user's session data from the Better Auth cookie and database.

## 2. User Management Functions

### `listUsers`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ page: number, limit: number, search?: string }`
- **Response:** `{ users: User[], total: number }`
- **Description:** Fetches paginated user list. Managers can read; Admins can read.

### `createUser`

- **Auth Required:** Yes
- **Role:** `ADMIN`
- **Request:** `{ name: string, email: string, password: string, role: 'ADMIN' | 'MANAGER' }`
- **Response:** `{ user: User }`
- **Description:** Creates a new internal staff account. Hashes password via Better Auth. Blocked for Managers.

### `updateUser`

- **Auth Required:** Yes
- **Role:** `ADMIN`
- **Request:** `{ id: string, name?: string, email?: string, role?: 'ADMIN' | 'MANAGER' }`
- **Response:** `{ user: User }`
- **Description:** Updates user profile or role. Managers cannot execute this.

### `resetUserPassword`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ userId: string, newPassword: string }`
- **Response:** `{ success: boolean }`
- **Description:** Resets a user's password. **Logic:** If the caller is a `MANAGER`, the server must explicitly verify that the target `userId` does not belong to an `ADMIN`. If it does, it throws a `403 Forbidden`.

### `deleteUser`

- **Auth Required:** Yes
- **Role:** `ADMIN`
- **Request:** `{ userId: string }`
- **Response:** `{ success: boolean }`
- **Description:** Deletes a user. **Logic:** Must run in a Drizzle transaction. First, updates `blogs` and `projects` setting `author_id` to the `caller's id`. Then deletes the user. Blocked for Managers.

## 3. Content Management Functions (Blogs, Projects, Careers)

_(Note: `createContent`, `updateContent`, `deleteContent`, `getContent`, `listContent` follow the exact same pattern for Blogs, Projects, and Careers. Detailed below for Blogs, applied identically to the others)._

### `listBlogs`

- **Auth Required:** No (Public) / Yes (Dashboard)
- **Role:** Public / `ADMIN` / `MANAGER`
- **Request:** `{ page: number, limit: number, status?: 'DRAFT' | 'PUBLISHED', authorId?: string }`
- **Response:** `{ blogs: BlogSummary[], total: number }`
- **Description:** Public calls automatically filter `status = 'PUBLISHED'`. Dashboard calls can filter by draft/author.

### `getBlogBySlug`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ slug: string }`
- **Response:** `{ blog: BlogDetail | null }`
- **Description:** Fetches a single published blog by its unique slug for the public detail page.

### `createBlog`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ title: string, excerpt?: string, content: string, cover_image_url?: string, status: 'DRAFT' | 'PUBLISHED' }`
- **Response:** `{ blog: Blog }`
- **Description:** Creates a blog. **Logic:** Auto-generates the `slug` from the title. If the slug exists, appends `-1`, `-2`, etc. Sets `author_id` to the caller's ID.

### `updateBlog`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string, title?: string, excerpt?: string, content?: string, cover_image_url?: string, status?: 'DRAFT' | 'PUBLISHED' }`
- **Response:** `{ blog: Blog }`
- **Description:** Updates blog details. If the title changes, regenerates and checks slug uniqueness.

### `deleteBlog`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ success: boolean }`
- **Description:** Hard deletes the blog post.

## 4. Public Engagement Functions

### `submitContactForm`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ full_name: string, organization?: string, email: string, phone: string, category: ContactCategory, subject: string, message: string, turnstileToken: string }`
- **Response:** `{ success: boolean, id: string }`
- **Description:** Validates Cloudflare Turnstile token, then inserts the contact submission into the `contacts` table.

### `subscribeNewsletter`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ email: string, turnstileToken: string }`
- **Response:** `{ success: boolean, message: string }`
- **Description:** Validates Turnstile token. Checks if email already exists in `subscriptions`. If not, inserts it. Returns success regardless to prevent email enumeration.

## 5. Media & Utility Functions

### `getCloudinaryUploadSignature`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ folder: string }`
- **Response:** `{ signature: string, timestamp: number, cloudName: string, apiKey: string, folder: string }`
- **Description:** Generates a secure signature for direct client-to-Cloudinary uploads, preventing Worker CPU overload from image processing.

### `getDashboardStats`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `void`
- **Response:** `{ totalBlogs: number, openCareers: number, unreadContacts: number, totalUsers: number }`
- **Description:** Fetches aggregated counts. **Logic:** Checks Cloudflare KV cache first. If missing, queries Turso, caches result for 60 seconds, and returns.

## 6. Publications Management Functions

### `listPublications`

- **Auth Required:** No (Public) / Yes (Dashboard)
- **Role:** Public / `ADMIN` / `MANAGER`
- **Request:** `{ page?: number, limit?: number, category?: PublicationCategory }`
- **Response:** `{ publications: PublicationSummary[], total: number }`
- **Description:** Fetches publications. Public calls only return metadata (no internal fields). Dashboard calls return full records.

### `getPublicationById`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ publication: Publication | null }`
- **Description:** Fetches a single publication by ID for editing in the dashboard.

### `createPublication`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ title: string, description: string, external_url: string, category: PublicationCategory }`
- **Response:** `{ publication: Publication }`
- **Description:** Creates a new publication record.

### `updatePublication`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string, title?: string, description?: string, external_url?: string, category?: PublicationCategory }`
- **Response:** `{ publication: Publication }`
- **Description:** Updates publication details.

### `deletePublication`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ success: boolean }`
- **Description:** Hard deletes the publication.

## 7. Public Content Functions (Projects & Careers)

### `listProjects`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ page: number, limit: number }`
- **Response:** `{ projects: ProjectSummary[], total: number }`
- **Description:** Fetches paginated published projects for the public projects list page. Returns only summary fields (no `content` HTML).

### `getProjectBySlug`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ slug: string }`
- **Response:** `{ project: ProjectDetail | null }`
- **Description:** Fetches a single published project by its unique slug for the public detail page.

### `createProject`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ title: string, location: string, content: string, cover_image_url?: string, status: 'DRAFT' | 'PUBLISHED' }`
- **Response:** `{ project: Project }`
- **Description:** Creates a project. Auto-generates the `slug` from the title with collision handling. Sets `author_id` to the caller's ID.

### `updateProject`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string, title?: string, location?: string, content?: string, cover_image_url?: string, status?: 'DRAFT' | 'PUBLISHED' }`
- **Response:** `{ project: Project }`
- **Description:** Updates project details. If the title changes, regenerates and checks slug uniqueness.

### `deleteProject`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ success: boolean }`
- **Description:** Hard deletes the project.

### `listCareers`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ page: number, limit: number }`
- **Response:** `{ careers: CareerSummary[], total: number }`
- **Description:** Fetches paginated published careers for the public careers list page.

### `getCareerBySlug`

- **Auth Required:** No
- **Role:** Public
- **Request:** `{ slug: string }`
- **Response:** `{ career: CareerDetail | null }`
- **Description:** Fetches a single published career by its unique slug for the public detail page.

### `createCareer`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ title: string, location: string, job_type: JobType, description: string, status: 'DRAFT' | 'PUBLISHED' }`
- **Response:** `{ career: Career }`
- **Description:** Creates a career. Auto-generates the `slug` from the title with collision handling.

### `updateCareer`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string, title?: string, location?: string, job_type?: JobType, description?: string, status?: 'DRAFT' | 'PUBLISHED' }`
- **Response:** `{ career: Career }`
- **Description:** Updates career details. If the title changes, regenerates and checks slug uniqueness.

### `deleteCareer`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ success: boolean }`
- **Description:** Hard deletes the career.

## 8. Contact Inbox Management Functions

### `listContacts`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ page: number, limit: number, category?: ContactCategory, isRead?: boolean }`
- **Response:** `{ contacts: Contact[], total: number }`
- **Description:** Fetches paginated contact submissions with optional filters for category and read status.

### `getContactById`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ contact: Contact | null }`
- **Description:** Fetches a single contact submission. Automatically marks it as read.

### `markContactRead`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ success: boolean }`
- **Description:** Marks a contact submission as read by setting `is_read = 1`.

### `deleteContact`

- **Auth Required:** Yes
- **Role:** `ADMIN`, `MANAGER`
- **Request:** `{ id: string }`
- **Response:** `{ success: boolean }`
- **Description:** Hard deletes the contact submission.

## 9. User Profile Functions

### `updateUserProfile`

- **Auth Required:** Yes
- **Role:** Any authenticated user
- **Request:** `{ name?: string, email?: string }`
- **Response:** `{ user: UserProfile }`
- **Description:** Allows any authenticated user to update their own name and email. Cannot change role or other users' profiles.

### `getUserProfile`

- **Auth Required:** Yes
- **Role:** Any authenticated user
- **Request:** `void`
- **Response:** `{ user: UserProfile }`
- **Description:** Returns the current authenticated user's profile data.

---
