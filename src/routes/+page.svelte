<script>
	import CompareSlider from "$lib/components/Gallery/CompareSlider.svelte";
	import ServiceCard from "$lib/components/Services/ServiceCard.svelte";
	import Button from "$lib/components/UI/Button.svelte";

	/** @type {{ data: import('./$types').PageData & { services: any[], showcaseProject: any } }} */
	let { data } = $props();
	let services = $derived(data.services);
	let showcaseProject = $derived(data.showcaseProject);
</script>

<!-- Hero Section -->
<section
	class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
>
	<!-- Background Effects -->
	<div class="absolute inset-0 z-0">
		<div
			class="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[128px]"
		></div>
		<div
			class="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[128px]"
		></div>
		<div
			class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"
		></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
			<!-- Hero Text -->
			<div
				class="text-left animate-in fade-in slide-in-from-left-8 duration-1000"
			>
				<div
					class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
						></span>
					</span>
					Now Open in Auto City
				</div>

				<h1
					class="text-5xl md:text-7xl font-black font-display tracking-tight text-white mb-8 leading-[1.05]"
				>
					Precision Repair.<br />
					<span
						class="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent"
					>
						Flawless Finish.
					</span>
				</h1>

				<p
					class="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-light"
				>
					Your vehicle deserves master craftsmanship. From minor dents
					to major restoration, we bring your car back to life with
					premium care.
				</p>

				<div class="flex flex-col sm:flex-row items-center gap-6">
					<Button size="lg" onclick={() => (location.href = "/book")}>
						Book Appointment
					</Button>
				</div>

				<div
					class="mt-16 flex items-center gap-8 border-t border-white/5 pt-8"
				>
					<div class="flex -space-x-4">
						{#each Array(4) as _}
							<div
								class="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden"
							>
								<img
									src="https://i.pravatar.cc/100?u={Math.random()}"
									alt="Customer"
								/>
							</div>
						{/each}
					</div>
					<div>
						<div class="flex text-amber-400 mb-1">★★★★★</div>
						<p class="text-sm text-slate-400">
							Trusted by 500+ car owners
						</p>
					</div>
				</div>
			</div>

			<!-- Hero Feature: Compare Slider -->
			<div
				class="relative animate-in fade-in zoom-in-95 duration-1000 delay-200"
			>
				<div
					class="absolute -inset-4 bg-emerald-500/20 rounded-[3rem] blur-3xl opacity-30"
				></div>

				{#if showcaseProject}
					<CompareSlider
						beforeImage={showcaseProject.beforeImage}
						afterImage={showcaseProject.afterImage}
					/>
				{:else}
					<div
						class="aspect-video bg-slate-800 rounded-3xl animate-pulse flex items-center justify-center"
					>
						<span
							class="text-slate-600 font-bold uppercase tracking-widest text-xs"
							>Loading Transformation...</span
						>
					</div>
				{/if}

				<!-- Floating Stat Badge -->
				<div
					class="absolute -bottom-10 -left-10 glass p-6 rounded-3xl animate-bounce duration-[3000ms] hidden lg:block"
				>
					<div
						class="text-emerald-400 text-3xl font-bold font-display"
					>
						100%
					</div>
					<div
						class="text-xs text-slate-400 uppercase tracking-widest font-bold"
					>
						Color Match
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Grid -->
<section id="services" class="py-32 bg-slate-950 relative overflow-hidden">
	<div
		class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
	></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-24">
			<h2
				class="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500 mb-6"
			>
				Expertise
			</h2>
			<h3
				class="text-4xl md:text-6xl font-black font-display text-white mb-6 tracking-tight"
			>
				World-Class Services
			</h3>
			<p
				class="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
			>
				Whether it's a minor scratch or a full restoration, we provide
				precision auto body care tailored to your vehicle's needs.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each services as service}
				<ServiceCard {...service} />
			{/each}
		</div>

		<div class="mt-20 text-center">
			<p class="text-slate-500 mb-8 font-light italic">
				Need something specific or a custom quote?
			</p>
			<Button
				variant="ghost"
				class="text-emerald-400 hover:text-white"
				onclick={() => (location.href = "/contact")}
			>
				Contact Our Specialists <span>→</span>
			</Button>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
	<div
		class="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-emerald-500/10"
	>
		<div
			class="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -mr-64 -mt-64"
		></div>

		<div
			class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12"
		>
			<div class="text-center md:text-left">
				<h2
					class="text-4xl md:text-5xl font-black font-display text-white mb-6"
				>
					Restoration Starts Here.
				</h2>
				<p
					class="text-emerald-100 text-lg md:text-xl max-w-xl leading-relaxed opacity-90 font-light"
				>
					Join hundreds of satisfied customers who trust Pasaar for
					their automotive needs. Schedule your free inspection today.
				</p>
			</div>

			<div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
				<Button
					variant="secondary"
					size="lg"
					class="bg-emerald-500 text-emerald-900 hover:bg-slate-100 px-12"
				>
					Book Now
				</Button>
				<!-- <Button variant="outline" size="lg" class="border-white/30 text-white hover:bg-white/10 px-12">
                    Calculator
                </Button> -->
			</div>
		</div>
	</div>
</section>
