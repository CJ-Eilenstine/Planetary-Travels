<script>
	import { user } from '$lib/stores/authStore';
	import { db } from '$lib/firebase/firebase.client.js';
	import { doc, setDoc, updateDoc } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { CameraIcon } from 'svelte-feather-icons';

	let { showModal = $bindable(), header, children, planetName, modalImg, planetPic } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
	});

	function takePicture() {
		// alert('Picture taken!');
		console.log('Picture taken!');
		console.log({ planetName });
		document.querySelector('.modalImage').src = `${modalImg}`;
		document.querySelector('.modalImage').alt = `Picture of ${planetName}`;
		document.querySelector('.picBtn').style.display = 'none';
		document.querySelector('.closeBtn').style.display = 'block';
		document.querySelector('.modalImage').style.boxShadow = '-1px 7px 16px 5px rgba(0,0,0,0.72)';

		// dialog.close();

		const auth = getAuth();
		const user = auth.currentUser;
		if (user) {
			console.log('user:', user.displayName);
			updateDoc(doc(db, 'users', user.uid), {
				[`visited${planetName}`]: true
			});
			console.log('User document updated with visited planet');
			console.log(user.displayName, 'visited', planetName);
		} else {
			alert('You need to be logged in to leave a review');
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
>
	<div class="modalContainer">
		{@render header?.()}
		<!-- <hr /> -->
		{@render children?.()}
		<img class="modalImage" src={planetPic} alt="Planet View" />

		<button class="picBtn" autofocus onclick={takePicture}>
			Take Picture
			<CameraIcon class="feather" />
		</button>
		<button class="closeBtn" onclick={() => dialog.close()}> Leave Planet </button>
	</div>
</dialog>

<style>
	dialog {
		max-width: 40em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin: auto;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.modalContainer {
		display: flex;
		flex-direction: column;
	}

	button {
		/* display: block; */
		width: 200px;
		height: 50px;
		background-color: var(--accent-color);
		color: var(--background-color);
		font-size: 18px;
		font-family: var(--KodeMono-font);
		border: none;
		border-radius: 10px;
		cursor: pointer;
		transition: background-color 0.3s ease;

		display: flex;
		justify-content: center;
		align-items: center;
		align-self: center;
		margin-top: 20px;
	}

	.closeBtn {
		display: none;
	}

	button:hover {
		background-color: var(--accent-color-hover);
		color: var(--primary-color);
	}

	dialog img {
		max-width: 100%;
		height: auto;
		margin-top: 1em;
		border-radius: 0.2em;
	}

	:global(.feather) {
		margin-left: 15px;
	}
</style>
