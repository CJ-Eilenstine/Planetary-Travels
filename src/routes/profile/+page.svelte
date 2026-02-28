<script>
	import { user } from '$lib/stores/authStore';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';

	let profileData = null;

	onMount(async () => {
		if ($user) {
			const docRef = doc(db, 'users', $user.uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				profileData = docSnap.data();
			}
		}
	});
</script>

{#if profileData}
	<h1>Username: {profileData.username}</h1>
	<h2>Planet: {profileData.planetOrigin}</h2>
	<h2>Species: {profileData.species}</h2>
{/if}
