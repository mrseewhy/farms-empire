# Error Architecture (`errors.md`)

This module defines how errors are caught, logged, and surfaced to the user, ensuring a resilient UX and preventing data loss.

## 1. Standardized Server Errors

All Server Functions throw standardized error classes that are caught by the TanStack Start error boundary and translated into user-friendly UI toasts.

```typescript
class AppError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message);
  }
}
// Examples:
throw new AppError(401, "UNAUTHORIZED", "You must be logged in.");
throw new AppError(403, "FORBIDDEN", "Managers cannot delete users.");
throw new AppError(404, "NOT_FOUND", "Blog post not found.");
```

## 2. TipTap WYSIWYG Error Handling (Graceful Degradation)

- **Scenario:** A user drags an image into the TipTap editor, but the Cloudinary upload fails or times out.
- **Implementation:**
  1. The custom TipTap Image Extension immediately inserts a `loading-image` node with a spinner. The user can continue typing.
  2. The upload happens in the background via the Server Function.
  3. **On Success:** The node is replaced with the standard `image` node containing the Cloudinary URL.
  4. **On Failure/Timeout:** The node transforms into an `error-image` node. It displays a red border, the text "Upload Failed", and a "Retry" button.
  5. **Crucial Rule:** The rest of the document's HTML content is completely unaffected. The user does not lose their typed text, and the draft can still be saved (minus the failed image).

## 3. Global Error Boundaries

- **Public Site:** If a dynamic page fails to load (e.g., Turso is temporarily unreachable), the TanStack Start `errorComponent` catches it and renders a beautifully styled "Something went wrong" page with a "Return Home" button, preserving the site's premium aesthetic.
- **Dashboard:** Errors in data fetching display an inline alert banner within the dashboard layout, allowing the user to retry the specific query without losing their sidebar navigation state.

## 4. Form Validation Errors

- Form errors (e.g., invalid email, missing required fields) are handled via `react-hook-form` combined with Zod.
- Errors are displayed inline directly below the specific input field in red (`text-error`), accompanied by an accessible `aria-describedby` link to the input.

## 5. Logging Strategy

- **Client-Side:** Non-critical errors (e.g., failed image upload retries) are logged to the console in development, but suppressed in production to avoid noise.
- **Server-Side:** All `AppError` throws and unhandled exceptions in Cloudflare Workers are automatically captured by Cloudflare's native logging. Structured logs include `timestamp`, `error_code`, `user_id` (if authenticated), and `route`. No PII (like passwords or raw messages) is logged.
