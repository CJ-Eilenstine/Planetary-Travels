<script>
	import './reviewCard.css';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { db } from '$lib/firebase/firebase.client.js';
	import { query, collection, onSnapshot, where, getDocs } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';
	import { UserIcon } from 'svelte-feather-icons';

	let reviewsData = [];

	onMount(async () => {
		const q = query(collection(db, 'reviews'), where('planet', '==', 'Earth'));
		const snapshot = await getDocs(q);

		reviewsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	});
</script>

{#if reviewsData.length > 0}
	{#each reviewsData as reviewsData}
		<div id="reviewCard">
			<div id="userReviewTop">
				<UserIcon />
				<span id="reviewerName">{reviewsData.reviewer}</span>
			</div>
			<p id="reviewTitle">{reviewsData.reviewTitle}</p>
			<p id="review">{reviewsData.reviewDesc}</p>
			<!-- <p id="date">{reviewsData.createdAt}</p> -->
		</div>
	{/each}
{:else if reviewsData.length === 0}
	<p>No Reviews Yet</p>
{:else}
	<p>Loading...</p>
{/if}
