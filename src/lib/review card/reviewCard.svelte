<script>
	import './reviewCard.css';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { db } from '$lib/firebase/firebase.client.js';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';

	$: if ($user) {
		loadProfile();
	}

	let profileData = null;

	async function loadProfile() {
		const docRef = doc(db, 'users', $user.uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			profileData = docSnap.data();
		}
	}
</script>

<div class="reviewCard">
	<p></p>
	<p></p>
</div>
