<script>
	import { user } from '$lib/stores/authStore';
	import { db } from '$lib/firebase/firebase.client.js';
	import { doc, setDoc, updateDoc } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';

	let { showModal = $bindable(), header, children, planetName } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
	});

	function takePicture() {
		// Placeholder for taking a picture
		alert('Picture taken!');
		console.log('Picture taken!');
		console.log({ planetName });
		dialog.close();

		const auth = getAuth();
		const user = auth.currentUser;
		if (user) {
			console.log('user:', user.displayName);
			updateDoc(doc(db, 'users', user.uid), {
				visitedSolaris: planetName === 'Solaris' ? true : false,
				visitedVex: planetName === 'Vex' ? true : false,
				visitedMasquerade: planetName === 'Masquerade' ? true : false
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
		<hr />
		{@render children?.()}
		<hr />
		<!-- svelte-ignore a11y_autofocus -->
		<button autofocus onclick={takePicture}>Take Picture</button>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
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
	}
</style>
