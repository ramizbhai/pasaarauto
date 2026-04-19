<script>
	import './layout.css';
	import { page } from '$app/state';
	
	let { children } = $props();
	
	const navLinks = [
		{ name: 'Services', href: '/services' },
		{ name: 'About', href: '/about' },
		{ name: 'Gallery', href: '/gallery' },
		// { name: 'Cost Calculator', href: '/quote' },
		{ name: 'Book Appointment', href: '/book' }
	];

    let isMobileMenuOpen = $state(false);
</script>

<svelte:head>
	<title>Pasaar Auto Body Repair - Premium Restoration & Care</title>
	<meta name="description" content="Expert auto body repair, painting, and dent removal. Professional restoration with industry-leading technology and precision." />
	
	<!-- Open Graph / WhatsApp / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://pasaarauto.com/" />
	<meta property="og:title" content="Pasaar Auto Body Repair - Premium Restoration" />
	<meta property="og:description" content="Precision dent removal, expert painting, and full vehicle restoration. Professional care for your premium automobile." />
	<meta property="og:image" content="https://pasaarauto.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://pasaarauto.com/" />
	<meta property="twitter:title" content="Pasaar Auto Body Repair - Premium Restoration" />
	<meta property="twitter:description" content="Expert auto body repair and professional restoration services." />
	<meta property="twitter:image" content="https://pasaarauto.com/og-image.jpg" />

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<div class="min-h-screen flex flex-col font-sans selection:bg-emerald-500/30">
	<!-- Navigation -->
	<nav class="sticky top-0 z-50 glass border-b border-white/5">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-20">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2 group">
					<div class="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
						<span class="text-white font-bold text-xl font-display">P</span>
					</div>
					<span class="text-2xl font-bold font-display tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
						Pasaar<span class="text-emerald-500">Auto</span>
					</span>
				</a>

				<!-- Desktop Nav -->
				<div class="hidden md:flex items-center gap-8">
					{#each navLinks as link}
						<a 
							href={link.href} 
							class="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors uppercase tracking-wider relative group"
						>
							{link.name}
							{#if page.url.pathname === link.href}
								<span class="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 rounded-full"></span>
							{:else}
								<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 rounded-full group-hover:w-full transition-all duration-300"></span>
							{/if}
						</a>
					{/each}
					<a href="/book" class="btn-primary py-2.5 px-6 text-sm">
						Book Now
					</a>
				</div>

				<!-- Mobile menu button -->
				<div class="md:hidden flex items-center">
					<button 
						onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
						class="text-slate-300 hover:text-white p-2"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{#if isMobileMenuOpen}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							{/if}
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div class="md:hidden glass border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
				<div class="px-2 pt-2 pb-3 space-y-1">
					{#each navLinks as link}
						<a 
							href={link.href}
							onclick={() => isMobileMenuOpen = false}
							class="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
						>
							{link.name}
						</a>
					{/each}
					<div class="pt-4 pb-2 px-3">
						<a 
							href="/book" 
							onclick={() => isMobileMenuOpen = false}
							class="w-full btn-primary block text-center"
						>
							Book Appointment
						</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Main Content -->
	<main class="flex-grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-slate-950 border-t border-white/5 pt-16 pb-8">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
				<div class="col-span-1 md:col-span-2">
					<div class="flex items-center gap-2 mb-6">
						<div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
							<span class="text-white font-bold text-lg font-display">P</span>
						</div>
						<span class="text-2xl font-bold font-display tracking-tight text-white">
							Pasaar<span class="text-emerald-500">Auto</span>
						</span>
					</div>
					<p class="text-slate-400 max-w-sm leading-relaxed mb-6">
						State-of-the-art auto body repair and restoration. We bring your vehicle back to life with precision, care, and industry-leading technology.
					</p>
					<div class="flex gap-4">
						<!-- Social Icons Mockup -->
						<div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">f</div>
						<div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">i</div>
						<div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">x</div>
					</div>
				</div>
				
				<div>
					<h4 class="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
					<ul class="space-y-4 text-slate-400">
						<li><a href="/services" class="hover:text-emerald-400 transition-colors">All Services</a></li>
						<li><a href="/about" class="hover:text-emerald-400 transition-colors">About Us</a></li>
						<li><a href="/gallery" class="hover:text-emerald-400 transition-colors">Before & After</a></li>
						<!-- <li><a href="/quote" class="hover:text-emerald-400 transition-colors">Get a Quote</a></li> -->
						<li><a href="/book" class="hover:text-emerald-400 transition-colors">Book Now</a></li>
					</ul>
				</div>
				
				<div>
					<h4 class="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
					<ul class="space-y-4 text-slate-400">
						<li class="flex items-start gap-3">
							<span class="text-emerald-500 items-center">📍</span>
							<span>5775 Atlantic Dr Unit 10&11,<br/>Mississauga, ON L4W 4P3, Canada</span>
						</li>
						<li class="flex items-center gap-3">
							<span class="text-emerald-500">📞</span>
							<span>+1 (942) 880-8815</span>
						</li>
						<li class="flex items-center gap-3">
							<span class="text-emerald-500">✉️</span>
							<span>contact@pasaarauto.com</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
				<p>© 2026 Pasaar Auto Body Repair. All rights reserved.</p>
				<div class="flex gap-6">
					<a href="/privacy" class="hover:text-slate-300">Privacy Policy</a>
					<a href="/terms" class="hover:text-slate-300">Terms of Service</a>
				</div>
			</div>
		</div>
	</footer>
</div>
