<script>
	import './profile.css';
	import { user } from '$lib/stores/authStore';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';

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

<div class="profileMain">
	<h1>Profile</h1>

	<div class="profileCard">
		{#if profileData}
			<h1>Intergalactic Travel Administration</h1>
			<div class="userInfo">
				<div class="char">
					<img
						src={`/src/lib/assets/character/Eyes/eyes${profileData.characterData.eyes}.png`}
						alt="Eyes"
					/>
				</div>
				<div class="info">
					<h2>{profileData.username}</h2>
					<h3>Planet: {profileData.planetOrigin}</h3>
					<h3>Species: {profileData.species}</h3>
					<h3>Date of Birth: {profileData.dob}</h3>
				</div>
			</div>
		{/if}
	</div>
</div>
