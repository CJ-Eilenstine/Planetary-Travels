<script>
	let { data } = $props();
</script>

<main class="detailsPage">
	<div class="detailsContainer">
		<div class="detailsBanner">
			<img src={data.detail.image} alt={data.detail.planetName} />
		</div>
		<h1>{data.detail.planetName}</h1>
		<h2>{data.detail.rating}</h2>
		<h3>{data.detail.price}</h3>
		<p>{data.detail.desc}</p>
	</div>
	<div class="reviews">
		<h2>reviews</h2>
	</div>
</main>
