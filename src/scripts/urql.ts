import { createClient, getContextClient, setContextClient } from '@urql/svelte'

export const setup = () => {
	setContextClient(
		createClient({
			url: import.meta.env.VITE_SERVER,
		})
	)
}
export const setup_server = () => {
	return createClient({
		url: import.meta.env.VITE_SERVER,
		fetch,
	})
}

export const query = async (query_obj: object, variables?: object) => {
	const client = getContextClient()
	return await client.query(query_obj as any, variables).toPromise()
}

export const mutation = async (query_obj: object, variables?: object) => {
	const client = getContextClient()
	return await client.mutation(query_obj as any, variables).toPromise()
}
