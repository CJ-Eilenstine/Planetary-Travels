<script>
	import './profile.css';
	import { user } from '$lib/stores/authStore';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import solarisGif from '$lib/assets/planets/solaris.gif';
	import masqueradeGif from '$lib/assets/planets/masquerade.gif';
	import vexGif from '$lib/assets/planets/vex.gif';
	import earthGif from '$lib/assets/planets/earth.gif';

	$: if ($user) {
		loadProfile();
	}

	let profileData = null;

	async function loadProfile() {
		const docRef = doc(db, 'users', $user.uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			profileData = docSnap.data();

			console.log('Profile data loaded:', profileData);

			document.querySelector('.stamp1').style.backgroundImage = profileData.visitedEarth
				? `url(${earthGif})`
				: 'none';

			document.querySelector('.stamp2').style.backgroundImage = profileData.visitedSolaris
				? `url(${solarisGif})`
				: 'none';
			document.querySelector('.stamp3').style.backgroundImage = profileData.visitedMasquerade
				? `url(${masqueradeGif})`
				: 'none';

			document.querySelector('.stamp4').style.backgroundImage = profileData.visitedVex
				? `url(${vexGif})`
				: 'none';
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
						<img src={`/character/Hair/hair${profileData.characterData.hair}.png`} alt="Hair" /><img
							src={`/character/Eyes/eyes${profileData.characterData.eyes}.png`}
							alt="Eyes"
						/>

						<img src={`/character/Nose/nose${profileData.characterData.nose}.png`} alt="Nose" /><img
							src={`/character/Mouth/mouth${profileData.characterData.mouth}.png`}
							alt="Mouth"
						/>
						<img src={`/character/Body/body${profileData.characterData.body}.png`} alt="Body" />
						<img
							src={`/character/Clothes/clothes${profileData.characterData.clothes}.png`}
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
			<h3>Earth</h3>
			<div class="stamp2"></div>
			<h3>Solaris</h3>
			<div class="stamp3"></div>
			<h3>Masquerade</h3>
			<div class="stamp4"></div>
			<h3>Vex</h3>
		</div>
	</div>
</div>
