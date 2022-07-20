<script context="module" lang="ts">
	import { setup_server } from '../scripts/urql'
	import {
		GetThreadsDocument,
		type GetThreadsQuery,
	} from '$lib/generated/graphql'

	export async function load() {
		const client = setup_server()
		const data = await client.query(GetThreadsDocument).toPromise()
		return { props: { data: data.data } }
	}
</script>

<script lang="ts">
	export let data: GetThreadsQuery
	import Button from '../components/button.svelte'
	import Logo from '../components/logo.svelte'
	import { goto } from '$app/navigation'
</script>

<header class="flex items-center p-4 border-b border-orange-900">
	<Logo size="lg" />
	<h1 class="text-orange-900 text-xl ml-4">gshit chan</h1>
</header>
<section class="w-9/12 m-8 border border-orange-900 rounded p-4">
	<h2 class="text-slate-400 mb-2 text-xl">/g/ - global</h2>
	{#each data.get_threads as thread}
		<article
			class="p-4 text-slate-200 text-sm border border-slate-800 rounded shadow-slate-800 my-2"
		>
			<div class="flex items-center justify-between">
				<h3 class="text-lg text-slate-600 mb-3">
					{thread.title}
				</h3>
				<small class="text-xs text-slate-700">{thread.username}</small>
			</div>

			<p class="indent-4">
				{thread.message}
			</p>
			<div class="flex justify-center my-2">
				<Button content="join thread" />
			</div>
		</article>
	{/each}
	<Button content="create thread" on_click={() => goto('/create_thread')} />
</section>
