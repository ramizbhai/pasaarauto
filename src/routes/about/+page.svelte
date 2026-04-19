<script>
	import Button from '$lib/components/UI/Button.svelte';
</script>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<!-- Background Effects -->
	<div class="absolute inset-0 z-0">
		<div class="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[160px]"></div>
		<div class="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[160px]"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Story Section -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
			<div>
				<h1 class="text-sm font-bold uppercase tracking-[0.4em] text-emerald-500 mb-6">Our Legacy</h1>
				<h2 class="text-5xl md:text-7xl font-black font-display text-white mb-8 tracking-tight">
					Crafting<br/>
					<span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">Perfection.</span>
				</h2>
				<p class="text-slate-400 text-xl font-light leading-relaxed mb-8">
					At Pasaar Auto Body Repair, we believe a car is more than just a machine—it's a masterpiece. Our journey started with a simple mission: to provide the highest level of craftsmanship in Mississauga, treating every vehicle with the respect it deserves.
				</p>
				<p class="text-slate-400 text-lg font-light leading-relaxed mb-12">
					Our state-of-the-art facility in Mississauga is equipped with industry-leading technology, including high-end paint booths and precision frame alignment systems. But technology is only half the story; our master technicians bring decades of combined experience to every restoration.
				</p>
				
				<div class="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
					<div>
						<div class="text-3xl font-black text-white font-display mb-1">15+</div>
						<div class="text-xs uppercase tracking-widest text-slate-500 font-bold">Years Experience</div>
					</div>
					<div>
						<div class="text-3xl font-black text-white font-display mb-1">2k+</div>
						<div class="text-xs uppercase tracking-widest text-slate-500 font-bold">Vehicles Restored</div>
					</div>
				</div>
			</div>

			<div class="relative group">
				<div class="absolute -inset-4 bg-emerald-500/20 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
				<div class="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
					<img 
						src="https://images.unsplash.com/photo-1625047509168-a7026f36ae04?q=80&w=1000&auto=format&fit=crop" 
						alt="Workshop" 
						class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
					/>
					<div class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
						<div class="glass p-6 rounded-2xl border-white/10">
							<p class="text-white font-light italic text-sm">"Precision isn't just a goal; it's our standard. If it's not perfect, it's not finished."</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Values Section -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
			<div class="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 hover:border-emerald-500/20 transition-colors">
				<div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-6">🛠️</div>
				<h3 class="text-xl font-bold text-white mb-4">Mastery</h3>
				<p class="text-slate-500 text-sm font-light leading-relaxed">
					We employ only the most skilled technicians who treat auto body repair as an art form, ensuring every line and curve is factory-correct.
				</p>
			</div>
			<div class="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 hover:border-emerald-500/20 transition-colors">
				<div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-6">🎨</div>
				<h3 class="text-xl font-bold text-white mb-4">Precision</h3>
				<p class="text-slate-500 text-sm font-light leading-relaxed">
					Our color-matching technology and surgical precision in dent removal guarantee a finish that is indistinguishable from new.
				</p>
			</div>
			<div class="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 hover:border-emerald-500/20 transition-colors">
				<div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-6">🛡️</div>
				<h3 class="text-xl font-bold text-white mb-4">Integrity</h3>
				<p class="text-slate-500 text-sm font-light leading-relaxed">
					We provide transparent quotes and honest assessments. No hidden fees, no unnecessary repairs—just quality you can trust.
				</p>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="text-center py-20 border-t border-white/5">
			<h4 class="text-3xl md:text-5xl font-black font-display text-white mb-8">Ready to Restore?</h4>
			<Button size="lg" onclick={() => location.href = '/book'}>
				Book Your Inspection
			</Button>
		</div>
	</div>
</div>
