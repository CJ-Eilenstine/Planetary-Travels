<script>
	import './profile.css';
	import { user } from '$lib/stores/authStore';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

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

	<div class="profile">
		<div class="profileCard">
			{#if profileData}
				<h1>Intergalactic Travel Administration</h1>
				<div class="userInfo">
					<div class="char">
						<img
							src={`/src/lib/assets/character/Hair/hair${profileData.characterData.hair}.png`}
							alt="Hair"
						/><img
							src={`/src/lib/assets/character/Eyes/eyes${profileData.characterData.eyes}.png`}
							alt="Eyes"
						/>

						<img
							src={`/src/lib/assets/character/Nose/nose${profileData.characterData.nose}.png`}
							alt="Nose"
						/><img
							src={`/src/lib/assets/character/Mouth/mouth${profileData.characterData.mouth}.png`}
							alt="Mouth"
						/>
						<img
							src={`/src/lib/assets/character/Body/body${profileData.characterData.body}.png`}
							alt="Body"
						/>
						<img
							src={`/src/lib/assets/character/Clothes/clothes${profileData.characterData.clothes}.png`}
							alt="Clothes"
						/>
					</div>
					<div class="info">
						<h2>{profileData.username}</h2>
						<h3>Planet: {profileData.planetOrigin}</h3>
						<h3>Species: {profileData.species}</h3>
						<h3>Date of Birth: {profileData.dob}</h3>
						<button on:click={goto('/character')}>Edit Character</button>
					</div>
				</div>
			{/if}
		</div>
		<div class="travelStamps">
			<h1>Travel Stamps</h1>
			<div class="stamp1"></div>
			<div class="stamp2"></div>
			<div class="stamp3"></div>
			<div class="stamp4"></div>
		</div>
	</div>
</div>
