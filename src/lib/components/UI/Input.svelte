<script>
	/** @type {{ 
	 *   label?: string,
	 *   type?: string,
	 *   placeholder?: string,
	 *   value: string | number,
	 *   name?: string,
	 *   required?: boolean,
	 *   error?: string,
	 *   class?: string
	 * }} */
	let { 
		label, 
		type = 'text', 
		placeholder = '', 
		value = $bindable(), 
		name, 
		required = false, 
		error,
		class: className = '' 
	} = $props();
</script>

<div class="flex flex-col gap-2 {className}">
	{#if label}
		<label for={name} class="text-sm font-medium text-slate-300 ml-1">
			{label} {#if required}<span class="text-emerald-500">*</span>{/if}
		</label>
	{/if}
	
	<input
		id={name}
		{name}
		{type}
		{placeholder}
		{required}
		bind:value
		class="w-full bg-slate-800/50 border {error ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
	/>
	
	{#if error}
		<span class="text-xs text-red-500 ml-1">{error}</span>
	{/if}
</div>
