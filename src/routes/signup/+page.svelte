<script>
	import './signup.css';
	import { auth } from '$lib/firebase/firebase.client.js';
	import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
	import { doc, setDoc, updateDoc } from 'firebase/firestore';
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
				visitedEarth: false,
				createdAt: new Date()
			});

			handlePlanetofOrigin(user);
			goto('/character');
		} catch (error) {
			alert(error.message);
		}
	}
	function handlePlanetofOrigin(user) {
		if (planetOrigin === 'Earth') {
			updateDoc(doc(db, 'users', user.uid), {
				visitedEarth: true
			});
		} else if (planetOrigin === 'Solaris') {
			updateDoc(doc(db, 'users', user.uid), {
				visitedSolaris: true
			});
		} else if (planetOrigin === 'Masquerade') {
			updateDoc(doc(db, 'users', user.uid), {
				visitedMasquerade: true
			});
		} else if (planetOrigin === 'Vex') {
			updateDoc(doc(db, 'users', user.uid), {
				visitedVex: true
			});
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
		<!-- <input bind:value={planetOrigin} type="" name="planet_origin" placeholder="Planet Origin" /> -->
		<label for="planet_origin">Choose a Planet of Origin</label>
		<select id="planets" name="planet_origin" bind:value={planetOrigin}>
			<option value="Earth">Earth</option>
			<option value="Solaris">Solaris</option>
			<option value="Masquerade">Masquerade</option>
			<option value="Vex">Vex</option>
		</select>
		<input bind:value={species} type="text" name="species" placeholder="Species" />
		<button type="submit">Sign Up</button>
	</form>
</div>
