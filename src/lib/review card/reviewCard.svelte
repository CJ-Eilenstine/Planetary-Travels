<script>
	import './reviewCard.css';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { db } from '$lib/firebase/firebase.client.js';
	import { query, collection, onSnapshot } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';

	let reviewsData = [];

	onMount(() => {
		const q = query(collection(db, 'reviews'));
		const unsub = onSnapshot(q, (querySnapshot) => {
			reviewsData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			// console.log(reviewsData[0].planet);
			// reviewsData.forEach((obj) => console.log(obj));
			for (const reviewPlanet of reviewsData) {
				console.log(reviewPlanet.planet);
			}
		});

		return unsub;
	});
</script>

{#if reviewsData.length > 0}
	{#each reviewsData as reviewsData}
		<div id="reviewCard">
			<div id="userReviewTop">
				<div class="userIcon">icon</div>
				<span id="reviewerName">{reviewsData.reviewer}</span>
			</div>

			<p id="review">{reviewsData.reviewDesc}</p>
			<!-- <p id="date">{reviewsData.createdAt}</p> -->
		</div>
	{/each}
{:else}
	<p>Loading...</p>
{/if}
