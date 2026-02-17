<script>
	import './signup.css';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';

	function handleSignup(e) {
		e.preventDefault();
		console.log('You have signed up');

		let email = document.getElementById('email-input').value;
		let pw = document.getElementById('password-input').value;
		let confirmPw = document.getElementById('confirm-password-input').value;

		if (pw !== confirmPw) {
			alert('Passwords do not match');
			return;
		}
		let username = document.getElementById('username-input').value;
		let dob = document.getElementById('dob-input').value;
		let planetOrigin = document.getElementById('planet-origin-input').value;
		let species = document.getElementById('species-input').value;

		createUserWithEmailAndPassword(auth, email, pw, username, dob, planetOrigin, species)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				goto('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert('Error Message ' + errorMessage);
			});
	}
</script>

<div class="signUp">
	<form>
		<h1>Sign Up</h1>
		<input type="email" placeholder="Email" id="email-input" />
		<input type="text" name="username" placeholder="Username" id="username-input" />
		<input type="password" placeholder="Password" id="password-input" />
		<input
			type="Password"
			name="confirm_password"
			placeholder="Confirm Password"
			id="confirm-password-input"
		/>
		<input type="date" name="dob" placeholder="Date of Birth" id="dob-input" />
		<input type="text" name="planet_origin" placeholder="Planet Origin" id="planet-origin-input" />
		<input type="text" name="species" placeholder="Species" id="species-input" />
		<button on:click={handleSignup} id="createAcctBtn">Sign Up</button>
	</form>
</div>
