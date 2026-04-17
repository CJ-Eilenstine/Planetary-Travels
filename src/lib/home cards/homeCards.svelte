<script>
	import './homeCards.css';
	let { planetName, rating, price, image } = $props();
</script>

<div class="homeCard">
	<a href="/browse/{planetName}">
		<div class="image-holder">
			<img src={image} alt={planetName} />
		</div>
		<div class="homeCardTextHolder">
			<h2>{planetName}</h2>
			<p>{rating}</p>
			<p>{price}</p>
		</div>
	</a>
</div>
