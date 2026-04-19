import { getServices } from '$lib/appwrite/api/services';
import { getGalleryProjects } from '$lib/appwrite/api/gallery';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
    // Fetch data in parallel
    const [services, projects] = await Promise.all([
        getServices(),
        getGalleryProjects()
    ]);

    return {
        services,
        showcaseProject: projects[0] || null
    };
};
