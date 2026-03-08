<script>
	import './homeCards.css';
	let { planetName, rating, price } = $props();
</script>

<div class="homeCard">
	<div class="image-holder"></div>
	<div class="homeCardTextHolder">
		<h2>{planetName}</h2>
		<p>{rating}</p>
		<p>{price}</p>
	</div>
</div>
