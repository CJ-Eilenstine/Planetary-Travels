<script>
	import { onMount } from 'svelte';
	import './character.css';
	import { get } from 'svelte/store';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { db } from '$lib/firebase/firebase.client.js';
	import { doc, getDoc } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';

	let profileData = null;

	$: character = profileData?.characterData;

	$: if ($user) {
		loadProfile();
	}

	async function loadProfile() {
		const docRef = doc(db, 'users', $user.uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			profileData = docSnap.data();
		}
	}

	function changeAppearance(feature, direction) {
		console.log(`Changing ${feature} in direction: ${direction}`);

		// let character = get(db.collection('users').doc(auth.currentUser.uid)).characterData;

		const eyesElement = document.getElementById('eyes');
		const hairElement = document.getElementById('hair');
		const mouthElement = document.getElementById('mouth');
		const noseElement = document.getElementById('nose');

		if (feature === 'eyes') {
			const currentSrc = eyesElement.getAttribute('src');
			const match = currentSrc.match(/eyes(\d+)\.png/);
			if (match) {
				let currentIndex = parseInt(match[1]);
				if (direction === 'left') {
					currentIndex = currentIndex > 1 ? currentIndex - 1 : 8;
					character.eyes = currentIndex;
				} else {
					currentIndex = currentIndex < 8 ? currentIndex + 1 : 1;
					character.eyes = currentIndex;
				}
				eyesElement.setAttribute('src', `/src/lib/assets/character/Eyes/eyes${currentIndex}.png`);
			}
		}

		if (feature === 'hair') {
			const currentSrc = hairElement.getAttribute('src');
			const match = currentSrc.match(/hair(\d+)\.png/);
			if (match) {
				let currentIndex = parseInt(match[1]);
				if (direction === 'left') {
					currentIndex = currentIndex > 1 ? currentIndex - 1 : 8;
				} else {
					currentIndex = currentIndex < 8 ? currentIndex + 1 : 1;
				}
				hairElement.setAttribute('src', `/src/lib/assets/character/Hair/hair${currentIndex}.png`);
			}
		}

		if (feature === 'mouth') {
			const currentSrc = mouthElement.getAttribute('src');
			const match = currentSrc.match(/mouth(\d+)\.png/);
			if (match) {
				let currentIndex = parseInt(match[1]);
				if (direction === 'left') {
					currentIndex = currentIndex > 1 ? currentIndex - 1 : 9;
				} else {
					currentIndex = currentIndex < 9 ? currentIndex + 1 : 1;
				}
				mouthElement.setAttribute(
					'src',
					`/src/lib/assets/character/Mouth/mouth${currentIndex}.png`
				);
			}
		}

		if (feature === 'nose') {
			const currentSrc = noseElement.getAttribute('src');
			const match = currentSrc.match(/nose(\d+)\.png/);
			if (match) {
				let currentIndex = parseInt(match[1]);
				if (direction === 'left') {
					currentIndex = currentIndex > 1 ? currentIndex - 1 : 8;
				} else {
					currentIndex = currentIndex < 8 ? currentIndex + 1 : 1;
				}
				noseElement.setAttribute('src', `/src/lib/assets/character/Nose/nose${currentIndex}.png`);
			}
		}
	}
</script>

<div class="characterPage">
	<h1>Your Appearance</h1>
	<div class="characterEditor">
		<div class="char">
			<img id="hair" src="/src/lib/assets/character/Hair/hair1.png" alt="Character Hair" />

			<img id="eyes" src="/src/lib/assets/character/Eyes/eyes1.png" alt="Character Eyes" />
			<img id="nose" src="/src/lib/assets/character/Nose/nose1.png" alt="Character Nose" />
			<img id="mouth" src="/src/lib/assets/character/Mouth/mouth1.png" alt="Character Mouth" />
		</div>
		<h2>Click on the arrows to change your appearance.</h2>
		<div class="charEditor">
			<div class="charEditorHair">
				<button on:click={() => changeAppearance('hair', 'left')}>&lt;</button>
				<p>Hair</p>
				<button on:click={() => changeAppearance('hair', 'right')}>&gt;</button>
			</div>
			<div class="charEditorHead">
				<button>&lt;</button>
				<p>Head</p>
				<button>&gt;</button>
			</div>
			<div class="charEditorMouth">
				<button on:click={() => changeAppearance('mouth', 'left')}>&lt;</button>
				<p>Mouth</p>
				<button on:click={() => changeAppearance('mouth', 'right')}>&gt;</button>
			</div>
			<div class="charEditorEyes">
				<button on:click={() => changeAppearance('eyes', 'left')}>&lt;</button>
				<p>Eyes</p>
				<button on:click={() => changeAppearance('eyes', 'right')}>&gt;</button>
			</div>
			<div class="charEditorBody">
				<button>&lt;</button>
				<p>Body</p>
				<button>&gt;</button>
			</div>
			<div class="charEditorNose">
				<button on:click={() => changeAppearance('nose', 'left')}>&lt;</button>
				<p>Nose</p>
				<button on:click={() => changeAppearance('nose', 'right')}>&gt;</button>
			</div>
		</div>
	</div>
</div>
