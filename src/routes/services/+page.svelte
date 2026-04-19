<script>
	import { services } from '$lib/mockData';
	import Button from '$lib/components/UI/Button.svelte';
	import ServiceCard from '$lib/components/Services/ServiceCard.svelte';
</script>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<!-- Background Effects -->
	<div class="absolute inset-0 z-0">
		<div class="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[160px]"></div>
		<div class="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[160px]"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Header -->
		<div class="text-center mb-24 max-w-3xl mx-auto">
			<h1 class="text-sm font-bold uppercase tracking-[0.4em] text-emerald-500 mb-6">Our Expertise</h1>
			<h2 class="text-5xl md:text-7xl font-black font-display text-white mb-8 tracking-tight">
				Automotive<br/>
				<span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">Excellence.</span>
			</h2>
			<p class="text-slate-400 text-xl font-light leading-relaxed">
				From high-precision paint matching to structural collision repair, we offer a full suite of services designed to restore your vehicle to factory perfection.
			</p>
		</div>

		<!-- Services Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
			{#each services as service}
				<div class="group relative">
					<div class="absolute -inset-0.5 bg-gradient-to-tr from-emerald-500/20 to-teal-500/0 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
					<div class="relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 h-full flex flex-col">
						<div class="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
						<h3 class="text-2xl font-bold text-white mb-4">{service.title}</h3>
						<p class="text-slate-400 font-light leading-relaxed mb-8 flex-grow">
							{service.description}
						</p>
						<div class="pt-8 border-t border-white/5 flex items-center justify-between">
							<div class="text-xs uppercase tracking-widest text-slate-500 font-bold">Starting From</div>
							<div class="text-2xl font-black text-emerald-400 font-display">${service.startingPrice.toLocaleString()}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Custom Requests -->
		<div class="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
			<div class="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
			<div class="relative z-10">
				<h3 class="text-3xl md:text-4xl font-black font-display text-white mb-6">Need a Custom Solution?</h3>
				<p class="text-slate-400 text-lg max-w-2xl mx-auto mb-10 font-light">
					Every vehicle is unique. If you don't see exactly what you're looking for, our specialists are ready to provide a tailored assessment for your specific needs.
				</p>
				<div class="flex flex-col sm:flex-row items-center justify-center gap-6">
					<Button size="lg" onclick={() => location.href = '/book'}>
						Free Consultation
					</Button>
					<Button variant="outline" size="lg" onclick={() => location.href = '/contact'}>
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
