<script>
	import { onMount } from 'svelte';
	import './character.css';
</script>

<div class="characterPage">
	<h1>Your Appearance</h1>
	<div class="characterEditor">
		<div class="char"></div>
		<h2>Click on the arrows to change your appearance.</h2>
		<div class="charEditor">
			<div class="charEditorHair">
				<button>&lt;</button>
				<p>Hair</p>
				<button>&gt;</button>
			</div>
			<div class="charEditorHead">
				<button>&lt;</button>
				<p>Head</p>
				<button>&gt;</button>
			</div>
			<div class="charEditorMouth">
				<button>&lt;</button>
				<p>Mouth</p>
				<button>&gt;</button>
			</div>
			<div class="charEditorEyes">
				<button>&lt;</button>
				<p>Eyes</p>
				<button>&gt;</button>
			</div>
			<div class="charEditorBody">
				<button>&lt;</button>
				<p>Body</p>
				<button>&gt;</button>
			</div>
			<div class="charEditorNose">
				<button>&lt;</button>
				<p>Nose</p>
				<button>&gt;</button>
			</div>
		</div>
	</div>
</div>
