<script>
	import './browseCard.css';
	let { planetName, rating, price } = $props();
</script>

<div class="browseCard">
	<div class="image-holder"></div>
	<div class="browseCardTextHolder">
		<h2><code>{planetName}</code></h2>
		<p><code>{rating}</code></p>
		<p>{price}</p>
	</div>
</div>
