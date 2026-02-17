<script>
	import './signin.css';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function handleLogin(e) {
		e.preventDefault();
		console.log('You have logged in');
		let email = document.getElementById('email-log').value;
		let pw = document.getElementById('password-log').value;

		signInWithEmailAndPassword(auth, email, pw)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				alert('Login successful!');
				goto('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert('Error Message ' + errorMessage);
			});
	}
</script>

<div class="signIn">
	<form>
		<h1>Sign In</h1>
		<input type="Email" placeholder="Email" id="email-log" />
		<input type="Password" placeholder="Password" id="password-log" />
		<button on:click={handleLogin} id="loginBtn">Sign In</button>
	</form>
</div>
