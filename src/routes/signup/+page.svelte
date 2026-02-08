<script>
	import './signup.css';
	import Nav from '$lib/nav/nav.svelte';
</script>

<Nav />

<div class="signUp">
	<form>
		<h1>Sign Up</h1>
		<input type="Email" name="email" placeholder="Email" />
		<input type="text" name="username" placeholder="Username" />
		<input type="Password" name="password" placeholder="Password" />
		<input type="Password" name="confirm_password" placeholder="Confirm Password" />
		<input type="date" name="dob" placeholder="Date of Birth" />
		<input type="text" name="planet_origin" placeholder="Planet Origin" />
		<input type="text" name="species" placeholder="Species" />
		<button>Sign Up</button>
	</form>
</div>
