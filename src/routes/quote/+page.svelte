<script>
	import Calculator from '$lib/components/Calculator/Calculator.svelte';
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
			<h1 class="text-sm font-bold uppercase tracking-[0.4em] text-emerald-500 mb-6">Transparency</h1>
			<h2 class="text-5xl md:text-7xl font-black font-display text-white mb-8 tracking-tight">
				Fair Pricing.<br/>
				<span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">No Surprises.</span>
			</h2>
			<p class="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
				Get an instant estimate for your vehicle's restoration. Select your service, car size, and damage level for a real-time quote.
			</p>
		</div>

		<!-- Calculator Grid -->
		<Calculator />
		
		<!-- Extra Trust Info -->
		<div class="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
			<div class="text-center">
				<div class="text-emerald-500 text-3xl mb-4">🛡️</div>
				<h4 class="text-white font-bold mb-2">Upfront Quotes</h4>
				<p class="text-slate-500 text-sm italic">We provide a solid baseline so you know what to expect before you arrive.</p>
			</div>
			<div class="text-center">
				<div class="text-emerald-500 text-3xl mb-4">🔍</div>
				<h4 class="text-white font-bold mb-2">Free Inspection</h4>
				<p class="text-slate-500 text-sm italic">Every quote is verified by a master technician upon physical arrival.</p>
			</div>
			<div class="text-center">
				<div class="text-emerald-500 text-3xl mb-4">🎨</div>
				<h4 class="text-white font-bold mb-2">Color Match</h4>
				<p class="text-slate-500 text-sm italic">Our estimates include premium solvent-based paint and clear coats.</p>
			</div>
		</div>
	</div>
</div>
