# Security Architecture (`security.md`)

This module defines the strict security boundaries, input validation, and spam prevention mechanisms.

## 1. Server-Side RBAC & Route Protection

- **Middleware:** A TanStack Start `beforeLoad` hook on the `_dashboard.tsx` layout route checks `getSession()`. If null, it redirects to `/login`.
- **Function Guards:** Every Server Function explicitly checks `session.user.role` against the required role before executing any Drizzle ORM query.

## 2. Input Validation (Zod)

All Server Functions accept raw input and immediately validate it using Zod schemas before processing.

- **Example (`submitContactForm`):**
  ```typescript
  const schema = z.object({
    full_name: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
    category: z.enum(['LANDOWNER_INVESTOR', 'COMMUNITY_REP', ...]),
    turnstileToken: z.string().min(1)
  });
  ```
- **HTML Sanitization:** Content from the TipTap editor is sanitized using `DOMPurify` on the client before sending, and validated on the server to ensure it only contains allowed HTML tags (preventing XSS).

## 3. Spam Protection (Cloudflare Turnstile)

- **Implementation:** The public Contact Form and Newsletter Subscription form include the Cloudflare Turnstile React widget.
- **Validation:** The `turnstileToken` is sent to the Server Function, which verifies it against the Cloudflare Turnstile Site Verify API using the `TURNSTILE_SECRET_KEY`. If invalid, the function throws a `400 Bad Request`.

## 4. Environment Variable Handling

- **Secrets:** `DATABASE_URL`, `CLOUDINARY_API_SECRET`, `BETTER_AUTH_SECRET`, `TURNSTILE_SECRET_KEY` are stored in Cloudflare Workers Secrets.
- **Public Keys:** `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `TURNSTILE_SITE_KEY` are exposed to the client via TanStack Start's `env` configuration.
- **Rule:** No secret keys are ever bundled into the client-side JavaScript.

## 5. Cloudinary Secure Uploads

- Direct client-to-Cloudinary uploads use **Signed Upload Presets**. The Server Function generates a signature using the `CLOUDINARY_API_SECRET`, ensuring clients cannot upload files without server authorization or exceed folder quotas.

---
