/**
 * Cloudinary signed upload preset generation for Farms Empire.
 *
 * Uses the Web Crypto API (available in Cloudflare Workers) to generate
 * SHA-1 signatures for secure client-to-Cloudinary uploads.
 *
 * This keeps image processing off the Worker — the client uploads directly
 * to Cloudinary using the signed preset.
 */

export interface UploadSignatureParams {
  folder: string;
  timestamp: number;
  upload_preset?: string;
}

export interface UploadSignatureResult {
  signature: string;
  timestamp: number;
  cloudName: string;
  apiKey: string;
  folder: string;
  upload_preset?: string;
}

/**
 * Generate a SHA-1 signature for Cloudinary signed upload.
 *
 * The signature is computed by:
 * 1. Sorting parameters alphabetically by key
 * 2. Serializing as `key1=value1&key2=value2`
 * 3. Appending the API secret
 * 4. Hashing with SHA-1 via Web Crypto API
 */
export async function generateUploadSignature(
  params: UploadSignatureParams,
  apiSecret: string
): Promise<string> {
  // Sort keys alphabetically and build parameter string
  const sortedKeys = Object.keys(params).sort();
  const paramString = sortedKeys
    .map((key) => `${key}=${params[key as keyof UploadSignatureParams]}`)
    .join("&");

  // Append API secret
  const str = paramString + apiSecret;

  // SHA-1 hash via Web Crypto API (available in Cloudflare Workers)
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);

  // Convert buffer to hex string
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Generate a complete signed upload preset for client-side Cloudinary uploads.
 *
 * The client uses this to upload directly to Cloudinary without routing
 * through the Worker (avoids Worker CPU overhead from image processing).
 *
 * @param options.folder - Destination folder in Cloudinary (e.g., "blogs/covers")
 * @param options.uploadPreset - Optional named upload preset from Cloudinary dashboard
 */
export async function getSignedUploadPreset(options: {
  folder: string;
  cloudName: string;
  apiKey: string;
  apiSecret: string;
  uploadPreset?: string;
}): Promise<UploadSignatureResult> {
  const timestamp = Math.round(Date.now() / 1000);

  const params: UploadSignatureParams = { folder: options.folder, timestamp };
  if (options.uploadPreset) {
    params.upload_preset = options.uploadPreset;
  }

  const signature = await generateUploadSignature(params, options.apiSecret);

  return {
    signature,
    timestamp,
    cloudName: options.cloudName,
    apiKey: options.apiKey,
    folder: options.folder,
    upload_preset: options.uploadPreset,
  };
}
