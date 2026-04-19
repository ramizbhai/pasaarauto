<script>
	/** @type {{ currentStep: number, totalSteps?: number }} */
	let { currentStep, totalSteps = 3 } = $props();

	const steps = [
		{ id: 1, label: 'Vehicle' },
		{ id: 2, label: 'Service' },
		{ id: 3, label: 'Contact' }
	];
</script>

<div class="relative flex justify-between items-center mb-16 max-w-sm mx-auto">
	<!-- Progress Line -->
	<div class="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0">
		<div 
			class="h-full bg-emerald-500 transition-all duration-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
			style="width: {((currentStep - 1) / (totalSteps - 1)) * 100}%"
		></div>
	</div>

	<!-- Step Circles -->
	{#each steps as step}
		<div class="relative z-10 flex flex-col items-center gap-3">
			<div 
				class="w-10 h-10 rounded-full flex items-center justify-center font-bold font-display transition-all duration-500 border-2
				{currentStep >= step.id ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-900 border-slate-700 text-slate-500'}"
			>
				{step.id}
			</div>
			<span class="text-[10px] font-bold uppercase tracking-[0.2em] {currentStep >= step.id ? 'text-emerald-400' : 'text-slate-500'}">
				{step.label}
			</span>
		</div>
	{/each}
</div>
