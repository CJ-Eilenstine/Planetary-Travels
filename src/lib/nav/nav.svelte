<script>
	import './nav.css';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { user } from '$lib/stores/authStore.js';
	import { signOut } from 'firebase/auth';

	async function handleLogout() {
		try {
			await signOut(auth);
			window.location.href = '/';
		} catch (error) {
			console.error('Error signing out:', error);
		}
	}
</script>

<nav>
	<div class="mainNav">
		<a href="/">Home</a>
		<a href="./browse">Browse</a>
	</div>

	<div class="logs">
		{#if $user}
			<a href="./profile">Profile</a>
			<button on:click={handleLogout}>Logout</button>
		{:else}
			<a href="./signin">Sign In</a>
			<p>||</p>
			<a href="./signup">Sign Up</a>
		{/if}
	</div>
</nav>
