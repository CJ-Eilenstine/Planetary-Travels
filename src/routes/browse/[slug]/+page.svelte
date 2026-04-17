<script>
	import './details.css';
	import ReviewCard from '$lib/review card/reviewCard.svelte';
	import { getAuth } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client.js';
	import { collection, addDoc } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';
	let { data } = $props();
	import { Modal } from '$lib';

	let showModal = $state(false);

	let reviewTitle = $state(''),
		reviewDesc = $state(''),
		planet = data.detail.planetName;

	function createReview() {
		const auth = getAuth();
		const user = auth.currentUser;
		if (user) {
			document.getElementById('userInputForm').style.display = 'flex';
			// console.log('username:', user.displayName);
		} else {
			alert('You need to be logged in to leave a review');
		}
	}

	async function saveReview() {
		if (!reviewTitle || !reviewDesc) {
			alert('Please fill in all fields');
			return;
		}
		try {
			const auth = getAuth();
			const user = auth.currentUser;

			if (user) {
				// const newReviewRef = doc(db, 'reviews');
				await addDoc(collection(db, 'reviews'), {
					planet,
					reviewTitle,
					reviewDesc,
					reviewer: user.displayName,
					createdAt: new Date()
				});
				console.log('Review Saved');
			} else {
				console.log('review did not save');
			}
			document.getElementById('userInputForm').style.display = 'none';
		} catch (error) {
			alert(error.message);
		}
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
		<button onclick={() => (showModal = true)}>Travel Now!!!</button>
	</div>
	<Modal bind:showModal>
		<div class="postCard"></div>
	</Modal>
	<div class="reviews">
		<h4>Reviews</h4>
		<button onclick={createReview}>Leave a review</button>
		<div id="userInputForm" style="display: none;">
			<p>Tell us how your trip went.</p>
			<input type="text" class="reviewTitle" placeholder="Title" bind:value={reviewTitle} />
			<textarea class="reviewDesc" placeholder="Your review here :)" bind:value={reviewDesc}
			></textarea>
			<button onclick={saveReview}>Save</button>
		</div>
		<ReviewCard></ReviewCard>
	</div>
</main>
