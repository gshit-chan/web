<script lang="ts">
	export let content: string
	export let on_click: (e: Event) => void = () => {}
</script>

<button
	on:click={on_click}
	class="text-slate-200 p-2 bg-slate-600 rounded shadow-slate-800 focus:outline-none focus:ring-orange-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 mt-2 text-xs active:bg-slate-700"
	>{content}</button
>
