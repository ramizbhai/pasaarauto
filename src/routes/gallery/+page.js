import { getGalleryProjects } from '$lib/appwrite/api/gallery';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const projects = await getGalleryProjects();

    return {
        projects
    };
}
