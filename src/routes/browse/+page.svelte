<script>
	import './browse.css';
	import BrowseCard from '$lib/browse cards/browseCard.svelte';
</script>

<div class="browse">
	<BrowseCard planetName={'planet1'} rating={'3.5'} price={'price'} />

	<BrowseCard planetName={'planet2'} rating={'4.5'} price={'price2'} />

	<BrowseCard planetName={'planet3'} rating={'4.7'} price={'price3'} />
</div>
