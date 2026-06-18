## QA Agent

1. Manually attempt to bypass UI restrictions by calling restricted Server Functions (e.g., `deleteUser`) via the browser console using a `MANAGER` session token and verify the server returns a 403 Forbidden error.
2. Inspect the HTTP response headers for Cloudinary image URLs and verify the `Cache-Control` directive enforces a 30-day edge TTL to protect the free tier.
3. Run the application with database query logging enabled and verify that loading the dashboard overview executes no more than one cached read and zero N+1 sequential queries.
4. Resize the browser viewport to 375px width and verify that the dashboard sidebar collapses into a slide-out drawer without breaking the main content layout.
5. Simulate a Cloudinary upload timeout in the TipTap editor and verify that the UI displays an error state without crashing the editor or losing the user's typed text.
