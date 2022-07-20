<script lang="ts">
	export let size: 'sm' | 'md' | 'lg'
	const size_val =
		size === 'sm' ? 'w-12 h-12' : size === 'md' ? 'w-16 h-16' : 'w-20 h-20'
</script>

<img
	src="/placeholder.svg"
	alt="gshit logo"
	class={size_val + ' border border-red-900 rounded'}
/>
