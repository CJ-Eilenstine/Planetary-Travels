<script>
	import './browseCard.css';
	let { planetName, rating, price } = $props();
</script>

<div class="browseCard">
	<div class="image-holder"></div>
	<div class="browseCardTextHolder">
		<h2>{planetName}</h2>
		<p>{rating}</p>
		<p>{price}</p>
	</div>
</div>
