import { databases } from '../client';
import { config } from '../config';
import { services as mockServices } from '$lib/mockData';

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 * @property {number} startingPrice
 */

/**
 * Maps an Appwrite document to our internal Service type
 * @param {any} doc 
 * @returns {Service}
 */
const mapDocToService = (doc) => ({
    id: doc.$id,
    title: doc.title,
    description: doc.description,
    icon: doc.icon,
    startingPrice: doc.base_price || 0
});

export const getServices = async () => {
    try {
        const response = await databases.listDocuments(
            config.databaseId,
            config.collections.services
        );
        return response.documents.map(mapDocToService);
    } catch (error) {
        console.error('Appwrite API Error (getServices):', error);
        // Fallback to mock data during development/failure
        return mockServices;
    }
};
