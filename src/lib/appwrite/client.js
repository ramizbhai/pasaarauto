import { Client, Databases, Storage } from 'appwrite';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID, APPWRITE_API_KEY } from '$lib/env.js';

const client = new Client();

if (PUBLIC_APPWRITE_ENDPOINT) {
    client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT);
}
if (PUBLIC_APPWRITE_PROJECT_ID) {
    client.setProject(PUBLIC_APPWRITE_PROJECT_ID);
}

export const databases = new Databases(client);
export const storage = new Storage(client);
export { client };
