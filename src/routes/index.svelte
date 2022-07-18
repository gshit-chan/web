<script>
	import Logo from "../components/logo.svelte";
</script>

<main class="flex flex-col items-center h-screen w-screen bg-slate-900">
	<header class="flex items-center p-4 border-b border-orange-900">
		<Logo size="lg"/>
		<h1 class="text-orange-900 text-xl ml-4">gshit chan</h1>
	</header>
	<section class="w-9/12 m-8 border border-orange-900 rounded p-4">
		<h2 class="text-slate-400 mb-2 text-xl">posts</h2>
		<article class="p-4 text-slate-200 text-sm border border-slate-800 rounded shadow-slate-800 my-2">
			<h3 class="text-lg text-slate-600 mb-3">test</h3>
			<p class="indent-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, culpa minima. Facere enim amet iusto temporibus. Autem unde deserunt, ab temporibus fugit reiciendis, consequatur perspiciatis, ratione eligendi enim voluptate aliquid!</p>
			<div class="flex justify-center my-2">
				<button class="p-2 bg-slate-600 rounded shadow-slate-800 focus:outline-none focus:ring-orange-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 mt-2 text-xs">join thread</button>
			</div>
		</article>
	</section>
</main>
