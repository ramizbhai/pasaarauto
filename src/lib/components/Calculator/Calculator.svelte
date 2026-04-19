<script>
	import { spring } from 'svelte/motion';
	import { services, calculatorFactors } from '$lib/mockData';
	import Button from '../UI/Button.svelte';
	import { trackEvent, ANALYTICS_EVENTS } from '$lib/analytics';

	let selectedServiceId = $state(services[0].id);
	let selectedSizeId = $state(calculatorFactors.vehicleSizes[0].id);
	let selectedSeverityId = $state(calculatorFactors.damageSeverities[0].id);

	// Derived logic for price calculation
	let basePrice = $derived(services.find(s => s.id === selectedServiceId)?.startingPrice || 0);
	let sizeMultiplier = $derived(calculatorFactors.vehicleSizes.find(s => s.id === selectedSizeId)?.multiplier || 1);
	let severityModifier = $derived(calculatorFactors.damageSeverities.find(s => s.id === selectedSeverityId)?.modifier || 0);

	let finalPrice = $derived(Math.round(basePrice * sizeMultiplier + severityModifier));

	// Animated counter (Initialized to 0 to avoid state-capture warnings and provide mount animation)
	let animatedPrice = spring(0, {
		stiffness: 0.1,
		damping: 0.4
	});

	$effect(() => {
		animatedPrice.set(finalPrice);
		
		// Track interaction (could be debounced in production)
		trackEvent(ANALYTICS_EVENTS.CALCULATOR_INTERACTION, {
			price: finalPrice,
			service: selectedServiceId
		});
	});
</script>

<div class="max-w-4xl mx-auto">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		<!-- Inputs Section -->
		<div class="lg:col-span-2 space-y-10">
			<!-- Service Selection -->
			<div class="space-y-4">
				<h4 class="text-white font-bold uppercase tracking-widest text-xs ml-1">1. Select Service</h4>
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
					{#each services as service}
						<button 
							onclick={() => selectedServiceId = service.id}
							class="p-6 rounded-3xl border transition-all text-left flex flex-col gap-3 {selectedServiceId === service.id ? 'bg-emerald-500/10 border-emerald-500 shadow-lg shadow-emerald-500/10' : 'bg-slate-900 border-white/5 hover:border-white/20'}"
						>
							<span class="text-2xl">{service.icon}</span>
							<span class="font-bold text-white text-sm">{service.title}</span>
						</button>
					{/each}
				</div>
			</div>

			<!-- Vehicle Size -->
			<div class="space-y-4">
				<h4 class="text-white font-bold uppercase tracking-widest text-xs ml-1">2. Vehicle Size</h4>
				<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
					{#each calculatorFactors.vehicleSizes as size}
						<button 
							onclick={() => selectedSizeId = size.id}
							class="px-4 py-8 rounded-2xl border transition-all text-center flex flex-col gap-2 {selectedSizeId === size.id ? 'bg-emerald-500/10 border-emerald-500' : 'bg-slate-900 border-white/5 hover:border-white/20'}"
						>
							<span class="font-bold text-white text-xs">{size.name}</span>
						</button>
					{/each}
				</div>
			</div>

			<!-- Damage Severity -->
			<div class="space-y-4">
				<h4 class="text-white font-bold uppercase tracking-widest text-xs ml-1">3. Damage Severity</h4>
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
					{#each calculatorFactors.damageSeverities as severity}
						<button 
							onclick={() => selectedSeverityId = severity.id}
							class="px-6 py-6 rounded-2xl border transition-all text-center {selectedSeverityId === severity.id ? 'bg-emerald-500/10 border-emerald-500' : 'bg-slate-900 border-white/5 hover:border-white/20'}"
						>
							<span class="font-bold text-white text-xs">{severity.name}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Result Section -->
		<div class="lg:col-span-1">
			<div class="sticky top-32 glass p-8 rounded-[2.5rem] border-emerald-500/20 flex flex-col h-fit">
				<h4 class="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-8 text-center">Estimated Total</h4>
				
				<div class="flex flex-col items-center mb-10">
					<div class="text-6xl font-black font-display text-white mb-2 tracking-tighter">
						${Math.round($animatedPrice).toLocaleString()}
					</div>
					<div class="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">Estimate Only</div>
				</div>

				<div class="space-y-4 mb-10">
					<div class="flex justify-between text-sm">
						<span class="text-slate-500">Base Service</span>
						<span class="text-slate-300">${basePrice.toLocaleString()}</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-slate-500">Weight Factor</span>
						<span class="text-slate-300">x{sizeMultiplier}</span>
					</div>
					{#if severityModifier > 0}
						<div class="flex justify-between text-sm">
							<span class="text-slate-500">Damage Scale</span>
							<span class="text-orange-400">+${severityModifier.toLocaleString()}</span>
						</div>
					{/if}
				</div>

				<Button class="w-full mb-6" onclick={() => location.href = '/book'}>
					Lock This Quote
				</Button>

				<p class="text-[10px] text-slate-500 text-center uppercase tracking-widest leading-relaxed">
					Final price may vary after professional inspection.
				</p>
			</div>
		</div>
	</div>
</div>
