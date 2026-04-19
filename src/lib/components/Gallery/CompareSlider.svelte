<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { getOptimizedImage } from '$lib/appwrite/images';

	/** @type {{ 
	 *   beforeImage: string, 
	 *   afterImage: string, 
	 *   aspectRatio?: string 
	 * }} */
	let { 
		beforeImage, 
		afterImage, 
		aspectRatio = 'aspect-video' 
	} = $props();

	let container = $state();
	let position = spring(50, {
		stiffness: 0.1,
		damping: 0.4
	});

	let clipPath = $derived(`inset(0 0 0 ${$position}%)`);
	let handleLeft = $derived(`${$position}%`);

	let isHovering = $state(false);

	onMount(() => {
		// Initial auto-animation to show interaction
		setTimeout(() => {
			position.set(30, { hard: false });
			setTimeout(() => {
				position.set(70, { hard: false });
				setTimeout(() => {
					position.set(50, { hard: false });
				}, 600);
			}, 600);
		}, 800);
	});

	/** @param {MouseEvent | TouchEvent} e */
	function handleMove(e) {
		if (!container) return;
		const rect = container.getBoundingClientRect();
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const x = ((clientX - rect.left) / rect.width) * 100;
		const newPos = Math.max(0, Math.min(100, x));
		position.set(newPos);
	}

	/** @param {KeyboardEvent} e */
	function handleKeyDown(e) {
		if (e.key === 'ArrowLeft') position.update(v => Math.max(0, v - 5));
		if (e.key === 'ArrowRight') position.update(v => Math.min(100, v + 5));
	}
</script>

<div 
	bind:this={container}
	class="relative {aspectRatio} w-full overflow-hidden rounded-3xl border border-white/10 group cursor-ew-resize select-none"
	onmousemove={handleMove}
	ontouchmove={handleMove}
	onmouseenter={() => isHovering = true}
	onmouseleave={() => isHovering = false}
	onkeydown={handleKeyDown}
	role="slider"
	aria-valuenow={$position}
	aria-valuemin="0"
	aria-valuemax="100"
	aria-label="Before and After repair comparison slider"
	tabindex="0"
>
	<!-- Before Image (Base) -->
	<img src={getOptimizedImage(beforeImage, { width: 1200 })} alt="Before repair" class="absolute inset-0 w-full h-full object-cover" />
	
	<!-- After Image (Clipped) -->
	<div 
		class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" 
		style="clip-path: {clipPath}"
	>
		<img src={getOptimizedImage(afterImage, { width: 1200 })} alt="After repair" class="absolute inset-0 w-full h-full object-cover" />
	</div>

	<!-- Labels -->
	<div class="absolute inset-0 flex items-center justify-between p-6 pointer-events-none transition-opacity duration-300 {isHovering ? 'opacity-0' : 'opacity-100'}">
		<span class="px-4 py-2 rounded-lg glass text-xs font-bold uppercase tracking-widest text-white shadow-xl">Before</span>
		<small class="px-4 py-2 rounded-lg glass text-xs font-bold uppercase tracking-widest text-emerald-400 shadow-xl">After</small>
	</div>

	<!-- Handle Line -->
	<div 
		class="absolute top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm pointer-events-none z-10"
		style="left: {handleLeft}"
	>
		<!-- Handle Controller -->
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center group-active:scale-125 transition-transform duration-200">
			<div class="flex gap-1">
				<div class="w-1 h-4 bg-slate-400 rounded-full"></div>
				<div class="w-1 h-4 bg-slate-400 rounded-full"></div>
			</div>
		</div>
	</div>

	<!-- Overlay Gradient for context -->
	<div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
</div>

<style>
	/* Ensure touch-action is handled for dragging */
	div {
		touch-action: none;
	}
</style>
