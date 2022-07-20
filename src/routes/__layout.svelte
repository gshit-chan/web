<script>
	// import { onMount } from 'svelte'
	import { setup } from '../scripts/urql'
	import '../app.css'

	setup()
</script>

<main class="flex flex-col items-center min-h-screen w-screen bg-slate-900">
	<slot />
</main>
