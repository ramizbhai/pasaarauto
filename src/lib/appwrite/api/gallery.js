import { databases } from '../client';
import { config } from '../config';
import { galleryProjects as mockProjects } from '$lib/mockData';

/**
 * Maps an Appwrite document to our internal Project type
 * @param {any} doc 
 * @returns {import('$lib/mockData').Project}
 */
const mapDocToProject = (doc) => ({
    id: doc.$id,
    model: doc.model,
    service: doc.service,
    description: doc.description,
    testimonial: doc.testimonial,
    beforeImage: doc.before_image_url || doc.before_image_id, // Flexibility for URLs or Storage IDs
    afterImage: doc.after_image_url || doc.after_image_id,
    category: doc.category
});

export const getGalleryProjects = async () => {
    try {
        const response = await databases.listDocuments(
            config.databaseId,
            config.collections.gallery
        );
        return response.documents.map(mapDocToProject);
    } catch (error) {
        console.error('Appwrite API Error (getGalleryProjects):', error);
        // Fallback to mock data during development/failure
        return mockProjects;
    }
};
