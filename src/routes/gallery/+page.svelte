<script>
	import GalleryGrid from '$lib/components/Gallery/GalleryGrid.svelte';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<!-- Background Effects -->
	<div class="absolute inset-0 z-0">
		<div class="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[128px]"></div>
		<div class="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[128px]"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Header -->
		<div class="text-center mb-24">
			<h1 class="text-sm font-bold uppercase tracking-[0.4em] text-emerald-500 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">Portfolio</h1>
			<h2 class="text-5xl md:text-7xl font-black font-display text-white mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
				The Art of <br/>
				<span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">Restoration.</span>
			</h2>
			<p class="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
				Browse our recent transformations. From minor dent removals to full-scale collision repairs, we bring perfection back to the road.
			</p>
		</div>

		<!-- Gallery Grid -->
		<div class="animate-in fade-in zoom-in-95 duration-1000 delay-300">
			<GalleryGrid projects={data.projects} />
		</div>
		
		<!-- Bottom CTA -->
		<div class="mt-32 text-center border-t border-white/5 pt-20">
			<h3 class="text-3xl font-bold text-white mb-6">Inspired by these results?</h3>
			<p class="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
				Schedule a free inspection and get a detailed quote for your vehicle's restoration.
			</p>
			<a 
				href="/book" 
				class="inline-flex items-center justify-center px-10 py-5 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
			>
				Start Your Quote
			</a>
		</div>
	</div>
</div>
