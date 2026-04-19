import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';

/**
 * Generates an optimized image URL using Appwrite's Transformation API
 * @param {string} fileId The Appwrite File ID or a full URL
 * @param {Object} options Transformation options
 * @param {number} [options.width] Width in pixels
 * @param {number} [options.height] Height in pixels
 * @param {number} [options.quality] Quality (1-100)
 * @param {string} [options.gravity] Gravity for cropping (center, top, etc.)
 * @returns {string} The transformed image URL
 */
export function getOptimizedImage(fileId, options = {}) {
    // If it's already a full URL or local static path, return as is
    if (!fileId || fileId.startsWith('http') || fileId.startsWith('/')) return fileId;

    const { 
        width = 800, 
        height, 
        quality = 85, 
        gravity = 'center' 
    } = options;

    const params = new URLSearchParams({
        project: PUBLIC_APPWRITE_PROJECT_ID,
        width: width.toString(),
        quality: quality.toString(),
        gravity
    });

    if (height) params.append('height', height.toString());
    
    // Explicitly request WebP/AVIF format based on modern browser tendencies
    params.append('output', 'webp');

    return `${PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/images/files/${fileId}/view?${params.toString()}`;
}
