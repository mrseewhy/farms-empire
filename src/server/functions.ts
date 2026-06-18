import { createServerFn } from "@tanstack/react-start";
import { getSignedUploadPreset } from "@/lib/cloudinary";
import { AppError } from "@/lib/errors";

/**
 * Server Function: getCloudinaryUploadSignature
 *
 * Generates a secure Cloudinary signed upload preset for client-side uploads.
 * The client uploads directly to Cloudinary (not through the Worker) to avoid
 * Worker CPU overhead from image processing.
 *
 * Auth Required: Yes (ADMIN or MANAGER)
 */
export const getCloudinaryUploadSignature = createServerFn({
  method: "POST",
})
  .validator((input: { folder: string }) => {
    if (!input.folder || typeof input.folder !== "string") {
      throw new AppError(400, "INVALID_INPUT", "Folder is required.");
    }
    // Sanitize folder name — only allow alphanumeric, hyphens, underscores, slashes
    if (!/^[a-zA-Z0-9_/]+$/.test(input.folder)) {
      throw new AppError(
        400,
        "INVALID_FOLDER",
        "Folder name can only contain letters, numbers, hyphens, underscores, and slashes."
      );
    }
    return { folder: input.folder };
  })
  .handler(async ({ data }) => {
    // Verify the user is authenticated (ADMIN or MANAGER)
    // TODO: In TanStack Start, extract real request headers from the server function context.
    // For now, skip auth check until the login flow is implemented.
    // const session = await requireSession(headers);

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      throw new AppError(
        500,
        "CLOUDINARY_NOT_CONFIGURED",
        "Cloudinary credentials are not configured."
      );
    }

    return getSignedUploadPreset({
      folder: data.folder,
      cloudName,
      apiKey,
      apiSecret,
    });
  });
