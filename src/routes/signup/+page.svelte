<script>
	import './signup.css';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client.js';
	import { goto } from '$app/navigation';
	import { collection, addDoc } from 'firebase/firestore';

	let email = '';
	let pw = '';
	let username = '';
	let confirmPw = '';
	let dob = '';
	let planetOrigin = '';
	let species = '';

	async function handleSignup(e) {
		e.preventDefault();

		if (pw !== confirmPw) {
			alert('Passwords do not match');
			return;
		}

		if (!email || !pw || !username || !dob || !planetOrigin || !species) {
			alert('Please fill in all fields');
			return;
		}

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, pw);
			const user = userCredential.user;

			await updateProfile(user, {
				displayName: username
			});

			await setDoc(doc(db, 'users', user.uid), {
				username,
				email,
				dob,
				planetOrigin,
				species,
				characterData: {
					hair: 1,
					eyes: 1,
					mouth: 1,
					nose: 1,
					body: 1,
					clothes: 1
				},
				visitedSolaris: false,
				visitedVex: false,
				visitedMasquerade: false,
				createdAt: new Date()
			});

			goto('/character');
		} catch (error) {
			alert(error.message);
		}
	}
</script>

<div class="signUp">
	<form on:submit={handleSignup}>
		<h1>Sign Up</h1>
		<input bind:value={email} type="email" placeholder="Email" />
		<input bind:value={username} type="text" name="username" placeholder="Username" />
		<input bind:value={pw} type="password" placeholder="Password" />
		<input
			bind:value={confirmPw}
			type="password"
			name="confirm_password"
			placeholder="Confirm Password"
		/>
		<input bind:value={dob} type="date" name="dob" placeholder="Date of Birth" />
		<input bind:value={planetOrigin} type="text" name="planet_origin" placeholder="Planet Origin" />
		<input bind:value={species} type="text" name="species" placeholder="Species" />
		<button type="submit">Sign Up</button>
	</form>
</div>
