<script>
	import { getOptimizedImage } from '$lib/appwrite/images';

	/** @type {{ 
	 *   project: { 
	 *     model: string, 
	 *     service: string, 
	 *     afterImage: string 
	 *   }, 
	 *   onclick: () => void 
	 * }} */
	let { project, onclick } = $props();
</script>

<button 
	class="group relative aspect-video w-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900 text-left transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
	{onclick}
>
	<!-- Main Image -->
	<img 
		src={getOptimizedImage(project.afterImage, { width: 800, quality: 80 })} 
		alt={project.model} 
		class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
		loading="lazy"
	/>

	<!-- Scrim / Overlays -->
	<div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80"></div>
	
	<!-- Top Badge / Labels -->
	<div class="absolute top-6 left-6 flex gap-2">
		<span class="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
			After
		</span>
	</div>

	<!-- Content -->
	<div class="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
		<p class="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">{project.service}</p>
		<h3 class="text-2xl font-bold text-white font-display leading-tight">{project.model}</h3>
	</div>

	<!-- Hover CTA Overlay -->
	<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] bg-emerald-500/5">
		<div class="px-6 py-3 bg-white text-slate-900 font-bold rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500 flex items-center gap-2">
			View Transformation
			<span class="text-lg">→</span>
		</div>
	</div>
</button>
