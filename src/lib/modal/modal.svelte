<script>
	import { user } from '$lib/stores/authStore';
	import { db } from '$lib/firebase/firebase.client.js';
	import { doc, setDoc, updateDoc } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { CameraIcon } from 'svelte-feather-icons';

	let { showModal = $bindable(), header, children, planetName, modalImg } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
	});

	function takePicture() {
		alert('Picture taken!');
		console.log('Picture taken!');
		console.log({ planetName });
		dialog.close();

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
	<div>
		{@render header?.()}
		<!-- <hr /> -->
		{@render children?.()}
		<img src={modalImg} alt="Planet View" />
		<!-- <hr /> -->
		<!-- svelte-ignore a11y_autofocus -->
		<button autofocus onclick={takePicture}>
			Take Picture
			<CameraIcon class="feather" />
		</button>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin: auto;
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
	button {
		display: block;
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
	}

	button:hover {
		background-color: var(--accent-color-hover);
		color: var(--primary-color);
	}

	:global(.feather) {
		margin-left: 15px;
	}
</style>
