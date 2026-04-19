<script>
	import GalleryCard from './GalleryCard.svelte';
	import ProjectModal from './ProjectModal.svelte';

	/** @type {{ projects: import('$lib/mockData').Project[] }} */
	let { projects = [] } = $props();

	/** @type {import('$lib/mockData').Project | null} */
	let activeProject = $state(null);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
	{#each projects as project}
		<GalleryCard 
			{project} 
			onclick={() => activeProject = project}
		/>
	{/each}
</div>

<ProjectModal 
	project={activeProject} 
	onclose={() => activeProject = null} 
/>
