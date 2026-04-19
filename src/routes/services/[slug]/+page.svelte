<script>
    import { page } from '$app/state';
    let slug = $derived(page.params.slug);
</script>

<div class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-bold font-display text-white mb-8">Service: {slug}</h1>
    <p class="text-slate-400">Detailed information about this service will be loaded here from Appwrite.</p>
</div>
