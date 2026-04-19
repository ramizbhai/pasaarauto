<script>
	import { fade, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import CompareSlider from './CompareSlider.svelte';
	import Button from '../UI/Button.svelte';

	/** @type {{ 
	 *   project: { 
	 *     model: string, 
	 *     service: string, 
	 *     description: string, 
	 *     testimonial: string, 
	 *     beforeImage: string, 
	 *     afterImage: string 
	 *   } | null, 
	 *   onclose: () => void 
	 * }} */
	let { project, onclose } = $props();

	// Body scroll lock
	$effect(() => {
		if (project) {
			const originalPadding = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${originalPadding}px`;
		} else {
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
		}
	});

	/** @param {KeyboardEvent} e */
	function handleKeyDown(e) {
		if (e.key === 'Escape') onclose();
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	});
</script>

{#if project}
	<!-- Barrier -->
	<div 
		class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
		transition:fade={{ duration: 300 }}
	>
		<!-- Backdrop -->
		<button 
			class="absolute inset-0 bg-slate-950/90 backdrop-blur-xl cursor-default w-full h-full"
			onclick={onclose}
			aria-label="Close modal"
		></button>

		<!-- Modal Container -->
		<div 
			class="relative w-full max-w-6xl max-h-full overflow-y-auto rounded-[3rem] bg-slate-900 border border-white/10 shadow-2xl flex flex-col lg:flex-row"
			transition:scale={{ duration: 400, start: 0.95, opacity: 0 }}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<!-- Image Section (Slider) -->
			<div class="w-full lg:w-2/3 p-4 md:p-8">
				<CompareSlider 
					beforeImage={project.beforeImage} 
					afterImage={project.afterImage} 
					aspectRatio="aspect-[4/3] lg:aspect-auto h-full"
				/>
			</div>

			<!-- Info Section -->
			<div class="w-full lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
				<div class="mb-10">
					<span class="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
						{project.service}
					</span>
					<h2 id="modal-title" class="text-4xl md:text-5xl font-black font-display text-white mb-6 leading-tight">
						{project.model}
					</h2>
					<p class="text-slate-400 text-lg leading-relaxed font-light mb-8">
						{project.description}
					</p>
				</div>

				{#if project.testimonial}
					<div class="p-8 rounded-3xl bg-white/5 border border-white/5 italic text-slate-300 relative mb-10">
						<span class="absolute -top-4 -left-2 text-6xl text-emerald-500/20 leading-none">“</span>
						<p class="relative z-10 leading-relaxed">
							{project.testimonial}
						</p>
					</div>
				{/if}

				<div class="flex gap-4">
					<Button class="flex-grow" onclick={() => location.href = '/book'}>
						Schedule My Repair
					</Button>
					<button 
						class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
						onclick={onclose}
						aria-label="Close modal"
					>
						✕
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Minimal scrollbar for the modal info if it overflows */
	div::-webkit-scrollbar {
		width: 4px;
	}
	div::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
	}
</style>
