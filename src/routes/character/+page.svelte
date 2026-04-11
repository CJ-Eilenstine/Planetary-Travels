<script>
	import { onMount } from 'svelte';
	import './character.css';
	import { get } from 'svelte/store';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { db } from '$lib/firebase/firebase.client.js';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';

	onMount(() => {
		if ($user) loadProfile();
	});

	let profileData = null;

	async function loadProfile() {
		// const docRef = doc(db, 'users', $user.uid);

		const querySnapshot = await getDoc(db, 'users', $user.uid, 'characterData');
		// const docSnap = await getDoc(querySnapshot);

		if (querySnapshot.exists()) {
			profileData = querySnapshot.data();
		}
	}

	function changeAppearance(feature, direction) {
		console.log('Loaded profile data:', profileData);
		// console.log(`Changing ${feature} in direction: ${direction}`);
		// console.log(`Current character data:`, profileData.characterData);

		const eyesElement = document.getElementById('eyes');
		const hairElement = document.getElementById('hair');
		const mouthElement = document.getElementById('mouth');
		const noseElement = document.getElementById('nose');
		const bodyElement = document.getElementById('body');
		const clothesElement = document.getElementById('clothes');

		if (feature === 'eyes') {
			const currentSrc = eyesElement.getAttribute('src');
			const match = currentSrc.match(/eyes(\d+)\.png/);
			if (match) {
				let currentIndex = parseInt(match[1]);
				if (direction === 'left') {
					currentIndex = currentIndex > 1 ? currentIndex - 1 : 8;
				} else {
					currentIndex = currentIndex < 8 ? currentIndex + 1 : 1;
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

		if (feature === 'body') {
			const currentSrc = bodyElement.getAttribute('src');
			const match = currentSrc.match(/body(\d+)\.png/);
			if (match) {
				let currentIndex = parseInt(match[1]);
				if (direction === 'left') {
					currentIndex = currentIndex > 1 ? currentIndex - 1 : 13;
				} else {
					currentIndex = currentIndex < 13 ? currentIndex + 1 : 1;
				}
				bodyElement.setAttribute('src', `/src/lib/assets/character/Body/body${currentIndex}.png`);
			}
		}

		if (feature === 'clothes') {
			const currentSrc = clothesElement.getAttribute('src');
			const match = currentSrc.match(/clothes(\d+)\.png/);
			if (match) {
				let currentIndex = parseInt(match[1]);
				if (direction === 'left') {
					currentIndex = currentIndex > 1 ? currentIndex - 1 : 8;
				} else {
					currentIndex = currentIndex < 8 ? currentIndex + 1 : 1;
				}
				clothesElement.setAttribute(
					'src',
					`/src/lib/assets/character/Clothes/clothes${currentIndex}.png`
				);
			}
		}
	}

	function save() {
		const eyesElement = document.getElementById('eyes');
		const hairElement = document.getElementById('hair');
		const mouthElement = document.getElementById('mouth');
		const noseElement = document.getElementById('nose');
		const bodyElement = document.getElementById('body');
		const clothesElement = document.getElementById('clothes');

		const newProfileData = {
			characterData: {
				eyes: parseInt(eyesElement.getAttribute('src').match(/eyes(\d+)\.png/)),
				hair: parseInt(hairElement.getAttribute('src').match(/hair(\d+)\.png/)),
				mouth: parseInt(mouthElement.getAttribute('src').match(/mouth(\d+)\.png/)),
				nose: parseInt(noseElement.getAttribute('src').match(/nose(\d+)\.png/)),
				body: parseInt(bodyElement.getAttribute('src').match(/body(\d+)\.png/)),
				clothes: parseInt(clothesElement.getAttribute('src').match(/clothes(\d+)\.png/))
			}
		};

		updateDoc(doc(db, 'users', $user.uid), newProfileData)
			.then(() => {
				console.log('Profile updated successfully!');
			})
			.catch((error) => {
				console.error('Error updating profile:', error);
			});
	}
</script>

<div class="characterPage">
	<h1>Your Appearance</h1>
	<div class="characterEditor">
		<div class="char">
			<img id="hair" src="/src/lib/assets/character/Hair/hair1.png" alt="Character Hair" />

			<img id="eyes" src="/src/lib/assets/character/Eyes/eyes1.png" alt="Eyes" />
			<!-- src={`/src/lib/assets/character/Eyes/eyes${toString(profileData.characterData.eyes) || 1}.png`} -->
			<img id="nose" src="/src/lib/assets/character/Nose/nose1.png" alt="Character Nose" />
			<img id="mouth" src="/src/lib/assets/character/Mouth/mouth1.png" alt="Character Mouth" />
			<img id="body" src="/src/lib/assets/character/Body/body1.png" alt="Body" />
			<img id="clothes" src="/src/lib/assets/character/Clothes/clothes1.png" alt="Clothes" />
		</div>
		<h2>Click on the arrows to change your appearance.</h2>
		<div class="charEditor">
			<div class="charEditorHair">
				<button on:click={() => changeAppearance('hair', 'left')}>&lt;</button>
				<p>Hair</p>
				<button on:click={() => changeAppearance('hair', 'right')}>&gt;</button>
			</div>
			<div class="charEditorClothes">
				<button on:click={() => changeAppearance('clothes', 'left')}>&lt;</button>
				<p>Clothes</p>
				<button on:click={() => changeAppearance('clothes', 'right')}>&gt;</button>
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
				<button on:click={() => changeAppearance('body', 'left')}>&lt;</button>
				<p>Body</p>
				<button on:click={() => changeAppearance('body', 'right')}>&gt;</button>
			</div>
			<div class="charEditorNose">
				<button on:click={() => changeAppearance('nose', 'left')}>&lt;</button>
				<p>Nose</p>
				<button on:click={() => changeAppearance('nose', 'right')}>&gt;</button>
			</div>
		</div>
		<button on:click={save()}>Save</button>
	</div>
</div>
