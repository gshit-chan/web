<script lang="ts">
	enum Chat {
		GLOBAL = 'GLOBAL',
	}
	export let chat: Chat = Chat.GLOBAL

	import { mutation } from '../scripts/urql'

	import Button from '../components/button.svelte'
	import { CreateThreadDocument } from '../lib/generated/graphql'
	import { goto } from '$app/navigation'

	const form_data = {
		username: '',
		message: '',
		title: '',
	}

	const handle_submit = async () => {
		await mutation(CreateThreadDocument, {
			username: form_data.username,
			chat: chat,
			title: form_data.title,
			message: form_data.message,
		})
		goto('/')
	}
</script>

<fieldset class="p-4 w-screen h-screen flex justify-center items-center">
	<form
		on:submit|preventDefault={handle_submit}
		class="flex flex-col text-slate-200 w-6/12"
	>
		<label for="username">username</label>
		<input
			class="w-full my-2 focus:outline-none focus:ring-orange-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 rounded bg-slate-700 border-0"
			id="username"
			type="text"
			placeholder="bj42069"
			bind:value={form_data.username}
		/>
		<label for="title">title</label>
		<input
			class="w-full my-2 focus:outline-none focus:ring-orange-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 rounded bg-slate-700 border-0"
			id="title"
			type="text"
			placeholder="awful title"
			required
			bind:value={form_data.title}
		/>
		<label for="message">message</label>
		<textarea
			class="my-2 focus:outline-none focus:ring-orange-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 rounded bg-slate-700 border-0"
			type="text"
			id="message"
			placeholder="good content"
			required
			bind:value={form_data.message}
		/>
		<Button content="submit" />
	</form>
</fieldset>
