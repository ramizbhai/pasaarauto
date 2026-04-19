<script>
	/** @type {{ 
	 *   children: import('svelte').Snippet, 
	 *   variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger', 
	 *   size?: 'sm' | 'md' | 'lg', 
	 *   type?: 'button' | 'submit' | 'reset',
	 *   disabled?: boolean,
	 *   class?: string,
	 *   onclick?: (e: MouseEvent) => void
	 * }} */
	let { 
		children, 
		variant = 'primary', 
		size = 'md', 
		type = 'button',
		disabled = false,
		class: className = '',
		onclick 
	} = $props();

	const variants = {
		primary: 'bg-gradient-to-tr from-emerald-600 to-teal-400 text-white hover:shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:scale-95 border border-white/10',
		secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 hover:text-white border border-white/5 active:scale-95',
		outline: 'border-2 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 backdrop-blur-sm active:scale-95',
		ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
		danger: 'bg-red-500/10 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white active:scale-95'
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg font-bold'
	};

	const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed';
</script>

<button
	{type}
	{disabled}
	{onclick}
	class="{baseClasses} {variants[variant]} {sizes[size]} {className}"
>
	{@render children()}
</button>
