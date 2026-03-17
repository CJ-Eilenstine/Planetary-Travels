<script>
	import './browse.css';
	import BrowseCard from '$lib/browse cards/browseCard.svelte';
	let { data } = $props();
</script>

<div class="browse">
	{#if data.summaries.length > 0}
		{#each data.summaries as { slug, planetName, rating, price } (slug)}
			<BrowseCard {planetName} {rating} {price} />
		{/each}
	{:else}
		<p>Loading posts...</p>
	{/if}
</div>
