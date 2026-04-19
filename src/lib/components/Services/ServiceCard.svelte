<script>
	import Button from '../UI/Button.svelte';

	/** @type {{ 
	 *   title: string, 
	 *   description: string, 
	 *   icon: string, 
	 *   startingPrice: number,
	 *   href?: string 
	 * }} */
	let { 
		title = 'Denture Repair', 
		description = 'Professional dent removal without damaging your vehicle\'s factory finish.', 
		icon = '🛠️', 
		startingPrice = 499,
		href = '/services' 
	} = $props();
</script>

<div class="glass p-8 rounded-[2rem] text-left hover:border-emerald-500/40 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
	<!-- Decorative Background Glow -->
	<div class="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

	<!-- Icon Container -->
	<div class="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300 shadow-inner">
		<span class="text-3xl group-hover:brightness-0 group-hover:invert transition-all">{icon}</span>
	</div>

	<!-- Content -->
	<div class="flex-grow relative z-10">
		<div class="flex items-center gap-3 mb-4">
			<h3 class="text-2xl font-bold text-white font-display leading-tight">{title}</h3>
		</div>
		
		<p class="text-slate-400 mb-8 leading-relaxed font-light">
			{description}
		</p>
	</div>

	<!-- Footer / CTA -->
	<div class="mt-auto space-y-6 pt-6 border-t border-white/5 relative z-10">
		<div class="flex items-center justify-between">
			<span class="text-xs font-bold uppercase tracking-widest text-slate-500">Starting from</span>
			<span class="text-xl font-bold text-emerald-400 font-display">${startingPrice}</span>
		</div>
		
		<Button variant="outline" class="w-full group-hover:bg-emerald-500 group-hover:text-white transition-all">
			Get Quote
		</Button>
	</div>
</div>
