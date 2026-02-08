<script>
	import './signup.css';
	import Nav from '$lib/nav/nav.svelte';
</script>

<Nav />

<div class="signUp">
	<form>
		<h1>Sign Up</h1>
		<input type="Email" placeholder="Email" />
		<input type="Username" placeholder="Username" />
		<input type="Password" placeholder="Password" />
		<input type="Password" placeholder="Confirm Password" />
		<input type="Date of Birth" placeholder="Date of Birth" />
		<input type="Planet Origin" placeholder="Planet Origin" />
		<input type="Species" placeholder="Species" />
		<button>Sign Up</button>
	</form>
</div>
