<!-- <script>
	import './reviewCard.css';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { db } from '$lib/firebase/firebase.client.js';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';

	import { collection, onSnapshot } from 'firebase/firestore';

	let reviewsData = [];

	onMount(() => {
		const unsub = onSnapshot(collection(db, 'reviews'), (querySnapshot) => {
			reviewsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		});
		return unsub; // Clean up listener on destroy
	});

	// $: if ($user) {
	// 	loadReviews();
	// }

	// let reviewsData = null;

	// async function loadReviews() {
	// 	const docRef = doc(db, 'reviews');
	// 	const docSnap = await getDoc(docRef);

	// 	if (docSnap.exists()) {
	// 		reviewsData = docSnap.data();
	// 	}
	// }
</script>

<div id="reviewCard">
	<div id="userReviewTop">
		<div class="userIcon">icon</div>
		<span id="reviewerName">{reviewsData.reviewer}</span>
	</div>

	<p id="review">{reviewsData.reviewDesc}</p>
	<p id="date">{createdAt}</p>
</div> -->
