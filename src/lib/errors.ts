/**
 * Standardized error class for Server Functions.
 * Caught by TanStack Start error boundaries and translated into user-friendly toasts.
 */
export class AppError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}
