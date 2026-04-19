/**
 * Centered and safe environment variable access.
 * This prevents build-time errors when variables are missing.
 * 
 * We use import.meta.env for public variables because Vite handles them leniantly 
 * (returning undefined if missing) whereas SvelteKit's $env/static/public 
 * throws a build error if a named export is missing.
 */

// Public variables (baked in at build time by Vite)
export const PUBLIC_APPWRITE_ENDPOINT = import.meta.env.PUBLIC_APPWRITE_ENDPOINT || '';
export const PUBLIC_APPWRITE_PROJECT_ID = import.meta.env.PUBLIC_APPWRITE_PROJECT_ID || '';
export const PUBLIC_APPWRITE_DATABASE_ID = import.meta.env.PUBLIC_APPWRITE_DATABASE_ID || '';
export const PUBLIC_APPWRITE_COLLECTION_SERVICES = import.meta.env.PUBLIC_APPWRITE_COLLECTION_SERVICES || '';
export const PUBLIC_APPWRITE_COLLECTION_GALLERY = import.meta.env.PUBLIC_APPWRITE_COLLECTION_GALLERY || '';
export const PUBLIC_APPWRITE_COLLECTION_APPOINTMENTS = import.meta.env.PUBLIC_APPWRITE_COLLECTION_APPOINTMENTS || '';

// Private variables (only available during build/SSR)
// We try to use process.env for Node environments or fallback safely
export const APPWRITE_API_KEY = (typeof process !== 'undefined' ? process.env?.APPWRITE_API_KEY : '') || '';
export const ADMIN_WHATSAPP_NUMBER = (typeof process !== 'undefined' ? process.env?.ADMIN_WHATSAPP_NUMBER : '') || '';
