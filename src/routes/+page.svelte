<script>
	// You can add any necessary script logic here
	import './home.css';
	import HomeCard from '$lib/home cards/homeCards.svelte';
	let { data } = $props();
</script>

<div class="home">
	<div class="banner">
		<div class="bannerText">
			<h1>The most Popular site for interplanetary travel.</h1>
			<p>Visit new worlds today!</p>
		</div>
	</div>

	<div class="homeCardTitleText">
		<h2>Recommended Places to visit</h2>
	</div>
	<div class="homeCardsSection">
		{#if data.summaries.length > 0}
			{#each data.summaries.slice(0, 3) as { slug, planetName, rating, price, image } (slug)}
				<HomeCard {planetName} {rating} {price} {image} />
			{/each}
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>
