<script>
	import './browse.css';
	import BrowseCard from '$lib/browse cards/browseCard.svelte';
	let { data } = $props();
</script>

<div class="browse">
	{#if data.summaries.length > 0}
		{#each data.summaries as { slug, planetName, rating, price, image } (slug)}
			<BrowseCard {planetName} {rating} {price} {image} />
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>
