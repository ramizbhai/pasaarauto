import { Client, Databases, ID, Query } from 'node-appwrite';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';
import { APPWRITE_API_KEY } from '$env/static/private';
import { config } from '../config';

// Server-side client with API key bypass
const serverClient = new Client()
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(APPWRITE_API_KEY);

const databases = new Databases(serverClient);

/**
 * Checks for a duplicate booking (same phone and date)
 * @param {string} phone 
 * @param {string} date 
 * @returns {Promise<boolean>}
 */
export async function isDuplicateBooking(phone, date) {
    try {
        const response = await databases.listDocuments(
            config.databaseId,
            config.collections.appointments,
            [
                Query.equal('customer_phone', phone),
                Query.equal('preferred_date', date)
            ]
        );
        return response.total > 0;
    } catch (error) {
        console.error('[Appwrite] Error checking duplicates:', error);
        return false; // Error on side of caution
    }
}

/**
 * Submits a new booking to Appwrite
 * @param {any} data 
 * @returns {Promise<{success: boolean, id?: string, error?: string}>}
 */
export async function createBooking(data) {
    try {
        const document = await databases.createDocument(
            config.databaseId,
            config.collections.appointments,
            ID.unique(),
            {
                car_brand: data.carBrand,
                car_model: data.carModel,
                car_year: parseInt(data.carYear),
                service_id: data.serviceId,
                customer_name: data.customerName,
                customer_phone: data.customerPhone,
                customer_email: data.customerEmail,
                preferred_date: data.preferredDate,
                notes: data.notes || '',
                submitted_at: new Date().toISOString()
            }
        );

        console.log('[Appwrite] Booking created successfully:', document.$id);
        return { success: true, id: document.$id };
    } catch (error) {
        console.error('[Appwrite] Submission failed:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}
