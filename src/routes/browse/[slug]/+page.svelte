<script>
	import './details.css';
	import ReviewCard from '$lib/review card/reviewCard.svelte';

	let reviewTitle = '',
		reviewText = '';

	let { data } = $props();
</script>

<main class="detailsPage">
	<div class="detailsContainer">
		<div class="detailsBanner">
			<img src={data.detail.image} alt="Image of {data.detail.planetName}" />
		</div>
		<h1>{data.detail.planetName}</h1>
		<h2>{data.detail.rating}</h2>
		<h3>{data.detail.price}</h3>
		<p>{data.detail.desc}</p>
		<button onclick={() => (showModal = true)}>Travel Now!!!</button>
	</div>
	<div class="reviews">
		<h4>Reviews</h4>
		<button onclick={createReview}>Leave a review</button>
		<div id="userInput"></div>
	</div>
</main>
