<script>
	import './details.css';
	import SolarisReviewCard from '$lib/review card/solarisReviewCard.svelte';
	import VexReviewCard from '$lib/review card/vexReviewCard.svelte';
	import MasqueradeReviewCard from '$lib/review card/masqueradeReviewCard.svelte';
	import EarthReviewCard from '$lib/review card/earthReviewCard.svelte';
	import { getAuth } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { db } from '$lib/firebase/firebase.client.js';
	import { doc, setDoc, addDoc, query, collection, onSnapshot } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';
	import { Modal } from '$lib';

	let { data } = $props();

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
			<img src={data.detail.banner} alt="Image of {data.detail.planetName}" />
		</div>
		<h1>{data.detail.planetName}</h1>
		<h2>{data.detail.rating}</h2>
		<h3>{data.detail.price}</h3>
		<p>{data.detail.desc}</p>
		{#if $user}
			<button onclick={() => (showModal = true)}>Travel Now!!!</button>{:else}
			<p>Please log in to visit Planets!</p>{/if}
	</div>

	<Modal
		bind:showModal
		planetName={data.detail.planetName}
		modalImg={data.detail.modalImage}
		planetPic={data.detail.planetPic}
	></Modal>

	<div class="reviews">
		<h4>Reviews</h4>

		{#if $user}
			<button onclick={createReview}>Leave a review</button>{:else}
			<p>Please log in to leave a Review!</p>{/if}

		<div id="userInputForm" style="display: none;">
			<p>Tell us how your trip went.</p>
			<input type="text" class="reviewTitle" placeholder="Title" bind:value={reviewTitle} />
			<textarea class="reviewDesc" placeholder="Your review here :)" bind:value={reviewDesc}
			></textarea>
			<button onclick={saveReview}>Save</button>
		</div>

		{#if data.detail.planetName === 'Solaris'}
			<SolarisReviewCard></SolarisReviewCard>
		{:else if data.detail.planetName === 'Vex'}
			<VexReviewCard></VexReviewCard>
		{:else if data.detail.planetName === 'Masquerade'}
			<MasqueradeReviewCard></MasqueradeReviewCard>
		{:else}
			<EarthReviewCard></EarthReviewCard>
		{/if}
		<!-- <ReviewCard></ReviewCard> -->
	</div>
</main>
