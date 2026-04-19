<script>
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import StepProgress from './StepProgress.svelte';
	import Button from '../UI/Button.svelte';
	import Input from '../UI/Input.svelte';
	import { services } from '$lib/mockData';
	import { trackEvent, ANALYTICS_EVENTS } from '$lib/analytics';

	/** @type {{ form: any }} */
	let { form } = $props();

	let currentStep = $state(1);
	let isSubmitting = $state(false);
	
	// Track completion based on server response or local state
	let isComplete = $derived(form?.success || false);

	$effect(() => {
		if (form?.success) {
			trackEvent(ANALYTICS_EVENTS.BOOKING_COMPLETE, {
				service: formData.serviceId
			});
		}
	});

	let formData = $state({
		carBrand: '',
		carModel: '',
		carYear: '',
		serviceId: services[0].id,
		customerName: '',
		customerPhone: '',
		customerEmail: '',
		preferredDate: '',
		notes: ''
	});

	function nextStep() {
		if (currentStep < 3) currentStep++;
	}

	function prevStep() {
		if (currentStep > 1) currentStep--;
	}
</script>

<div class="max-w-xl mx-auto pb-32 md:pb-0">
	{#if isComplete}
		<div class="text-center py-20 animate-in fade-in zoom-in-95 duration-500" in:fly={{ y: 20, duration: 500 }}>
			<div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
				<span class="text-4xl text-white">✓</span>
			</div>
			<h2 class="text-4xl font-bold text-white mb-4 font-display">Appointment Requested!</h2>
			<p class="text-slate-400 mb-10 leading-relaxed font-light">
				We've received your details, <span class="text-white font-medium">{formData.customerName}</span>. Our team will contact you within 2 business hours to confirm your booking for <span class="text-white font-medium">{formData.preferredDate}</span>.
			</p>
			<Button variant="outline" onclick={() => location.href = '/'}>
				Return Home
			</Button>
		</div>
	{:else}
		<StepProgress {currentStep} />

		<form 
			method="POST" 
			use:enhance={() => {
				isSubmitting = true;
				return async ({ update }) => {
					await update();
					isSubmitting = false;
				};
			}}
			class="relative"
		>
			<!-- Honeypot (Spam Protection) -->
			<div class="hidden" aria-hidden="true">
				<input type="text" name="website" tabindex="-1" autocomplete="off" />
			</div>

			<!-- Hidden Fields -->
			<input type="hidden" name="serviceId" value={formData.serviceId} />

			<!-- Global Error Message -->
			{#if form?.message}
				<div class="mb-8 p-6 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-in fade-in slide-in-from-top-4 duration-300">
					<div class="font-bold mb-1">Submission Failed</div>
					{form.message}
				</div>
			{/if}

			<!-- Step 1: Vehicle -->
			{#if currentStep === 1}
				<div class="space-y-8" in:fly={{ x: 20, duration: 400 }} out:fly={{ x: -20, duration: 300 }}>
					<div class="space-y-6">
						<h3 class="text-2xl font-bold text-white font-display">Vehicle Information</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Input 
								name="carBrand"
								label="Car Brand" 
								placeholder="e.g. Tesla" 
								bind:value={formData.carBrand} 
								error={form?.errors?.carBrand}
								required 
							/>
							<Input 
								name="carModel"
								label="Model" 
								placeholder="e.g. Model 3" 
								bind:value={formData.carModel} 
								error={form?.errors?.carModel}
								required 
							/>
						</div>
						<Input 
							name="carYear"
							label="Manufacturing Year" 
							type="number" 
							placeholder="e.g. 2023" 
							bind:value={formData.carYear} 
							error={form?.errors?.carYear}
							required 
						/>
					</div>
					
					<div class="hidden md:block">
						<Button onclick={nextStep} class="w-full" type="button">
							Next Step: Select Service
						</Button>
					</div>
				</div>
			{/if}

			<!-- Step 2: Service -->
			{#if currentStep === 2}
				<div class="space-y-8" in:fly={{ x: 20, duration: 400 }} out:fly={{ x: -20, duration: 300 }}>
					<div class="space-y-6">
						<h3 class="text-2xl font-bold text-white font-display">Select Repair Service</h3>
						<div class="space-y-4">
							{#each services as service}
								<button 
									type="button"
									onclick={() => formData.serviceId = service.id}
									class="w-full p-6 rounded-3xl border transition-all text-left flex items-center justify-between
									{formData.serviceId === service.id ? 'bg-emerald-500/10 border-emerald-500' : 'bg-slate-900 border-white/5 hover:border-white/10'}"
								>
									<div class="flex items-center gap-4">
										<span class="text-2xl">{service.icon}</span>
										<div>
											<div class="font-bold text-white whitespace-nowrap">{service.title}</div>
											<div class="text-xs text-slate-500">Professional {service.title.toLowerCase()} care</div>
										</div>
									</div>
									<div class="w-6 h-6 rounded-full border-2 flex items-center justify-center {formData.serviceId === service.id ? 'border-emerald-500' : 'border-slate-700'}">
										{#if formData.serviceId === service.id}
											<div class="w-3 h-3 bg-emerald-500 rounded-full"></div>
										{/if}
									</div>
								</button>
							{/each}
						</div>
					</div>

					<div class="hidden md:flex gap-4">
						<Button variant="outline" onclick={prevStep} class="flex-grow" type="button">Back</Button>
						<Button onclick={nextStep} class="flex-grow" type="button">Next: Final Details</Button>
					</div>
				</div>
			{/if}

			<!-- Step 3: Contact -->
			{#if currentStep === 3}
				<div class="space-y-8" in:fly={{ x: 20, duration: 400 }} out:fly={{ x: -20, duration: 300 }}>
					<div class="space-y-6">
						<h3 class="text-2xl font-bold text-white font-display">Contact & Schedule</h3>
						<Input 
							name="customerName"
							label="Full Name" 
							placeholder="John Doe" 
							bind:value={formData.customerName} 
							error={form?.errors?.customerName}
							required 
						/>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Input 
								name="customerPhone"
								label="Phone Number" 
								type="tel" 
								placeholder="9876543210" 
								bind:value={formData.customerPhone} 
								error={form?.errors?.customerPhone}
								required 
							/>
							<Input 
								name="preferredDate"
								label="Preferred Date" 
								type="date" 
								bind:value={formData.preferredDate} 
								error={form?.errors?.preferredDate}
								required 
							/>
						</div>

						<div class="flex flex-col gap-2">
							<label for="notes" class="text-sm font-medium text-slate-300 ml-1">Additional Notes</label>
							<textarea 
								id="notes"
								name="notes"
								bind:value={formData.notes}
								placeholder="Tell us about the damage..."
								class="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white h-32 focus:outline-emerald-500"
							></textarea>
						</div>
					</div>

					<div class="hidden md:flex gap-4">
						<Button variant="outline" onclick={prevStep} class="flex-grow" type="button">Back</Button>
						<Button type="submit" class="flex-grow" disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Request Appointment'}
						</Button>
					</div>
				</div>
			{/if}

			<!-- Mobile Sticky CTA -->
			<div class="fixed bottom-0 left-0 right-0 p-4 glass border-t border-white/5 z-50 md:hidden animate-in slide-in-from-bottom-full duration-500">
				{#if currentStep < 3}
					<Button onclick={nextStep} class="w-full py-4 text-lg" type="button">
						Next Step — {currentStep === 1 ? 'Service' : 'Contact'}
					</Button>
				{:else}
					<div class="flex gap-4">
						<Button variant="outline" onclick={prevStep} class="px-6" type="button">←</Button>
						<Button type="submit" class="flex-grow" disabled={isSubmitting}>
							{isSubmitting ? 'Wait...' : 'Request Appointment'}
						</Button>
					</div>
				{/if}
			</div>
		</form>
	{/if}
</div>
