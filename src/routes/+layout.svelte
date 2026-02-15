<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import '../global.css';
	import Nav from '$lib/nav/nav.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />

{@render children()}
