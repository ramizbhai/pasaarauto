<script>
	import BookingForm from '$lib/components/Booking/BookingForm.svelte';

	/** @type {{ form: any }} */
	let { form } = $props();
</script>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<!-- Background Effects -->
	<div class="absolute inset-0 z-0">
		<div class="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[128px]"></div>
		<div class="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[128px]"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Header -->
		<div class="text-center mb-16">
			<h1 class="text-sm font-bold uppercase tracking-[0.4em] text-emerald-500 mb-6 font-display">Appointment</h1>
			<h2 class="text-4xl md:text-6xl font-black font-display text-white mb-8 tracking-tight">
				Book Your <br/>
				<span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">Restoration Session.</span>
			</h2>
			<p class="text-slate-400 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed">
				Fast, professional, and reliable. Complete the 3 quick steps below to request your visit at our Auto City workshop.
			</p>
		</div>

		<!-- Booking Form Section -->
		<BookingForm {form} />
	</div>
</div>
