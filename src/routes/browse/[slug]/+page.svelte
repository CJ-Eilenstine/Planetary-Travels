<script>
	import './details.css';
	import ReviewCard from '$lib/review card/reviewCard.svelte';

	let reviewTitle = '',
		reviewText = '';

	let { data } = $props();

	function createReview() {
		document.getElementById('userInput').innerHTML =
			'<div class=userInputForm><p>Write your review. How was your trip?</p><input bind:value={reviewTitle} placeholder="Review Title" type="text" class="reviewTitle"/><textarea bind:value={reviewText} placeholder="Your review :)" type="text" class="reviewText"></textarea><button onclick={saveReview}>Save</button></div>';
	}

	function saveReview() {
		console.log('save');
		// if (!reviewTitle || !reviewText) {
		// 	alert('Please fill in all fields');
		// 	return;
		// }

		// setDoc(doc(db, 'reviews', review.uid), {
		// 	reviewTitle,
		// 	reviewText,
		// 	createdAt: new Date()
		// });
	}
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
		<button>Travel Now!!!</button>
	</div>
	<div class="reviews" id="reviews">
		<h4>Reviews</h4>
		<button onclick={createReview}>Leave a review</button>
		<div id="userInput"></div>
	</div>
</main>
