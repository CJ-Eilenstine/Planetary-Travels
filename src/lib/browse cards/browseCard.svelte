<script>
	import './browseCard.css';
	let { planetName, rating, price, image } = $props();
</script>

<div class="browseCard">
	<a href="/browse/{planetName}">
		<div class="image-holder">
			<img src={image} alt={planetName} />
		</div>
		<div class="browseCardTextHolder">
			<h2>{planetName}</h2>
			<p>{rating}</p>
			<p>{price}</p>
		</div>
	</a>
</div>
