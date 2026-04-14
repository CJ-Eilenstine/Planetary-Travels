<script>
	import './details.css';
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client.js';
	import { collection, addDoc } from 'firebase/firestore';
	import { user } from '$lib/stores/authStore';
	let { data } = $props();
	import { Modal } from '$lib';

	let showModal = $state(false);

	let reviewTitle = '',
		reviewDesc = '';

	function createReview() {
		document.getElementById('userInputForm').style.display = 'flex';
	}

	function saveReview() {
		console.log('Review Saved');
		if (!reviewTitle || !reviewDesc) {
			alert('Please fill in all fields');
			return;
		}

		setDoc(doc(db, 'reviews', user), {
			reviewTitle,
			reviewDesc,
			createdAt: new Date()
		});
	}
</script>

<main class="detailsPage">
	<div class="detailsContainer">
		<div class="detailsBanner">
			<img src={data.detail.image} alt="Image of {data.detail.planetName}" />
		</div>
		<h1>{data.detail.planetName}</h1>
		<h2>{data.detail.rating}</h2>
		<h3>{data.detail.price}</h3>
		<p>{data.detail.desc}</p>
		<button onclick={() => (showModal = true)}>Travel Now!!!</button>
	</div>
	<Modal bind:showModal>
		{#snippet header()}
			<h2>
				modal
				<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
			</h2>
		{/snippet}

		<ol class="definition-list">
			<li>of or relating to modality in logic</li>
			<li>
				containing provisions as to the mode of procedure or the manner of taking effect —used of a
				contract or legacy
			</li>
			<li>of or relating to a musical mode</li>
			<li>of or relating to structure as opposed to substance</li>
			<li>
				of, relating to, or constituting a grammatical form or category characteristically
				indicating predication
			</li>
			<li>of or relating to a statistical mode</li>
		</ol>

		<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
	</Modal>
	<div class="reviews">
		<h4>Reviews</h4>
		<button onclick={createReview}>Leave a review</button>
		<div id="userInputForm" style="display: none;">
			<p>Tell us how your trip went.</p>
			<input type="text" class="reviewTitle" placeholder="Title" bind:value={reviewTitle} />
			<textarea class="reviewDesc" placeholder="Your review here :)" bind:value={reviewDesc}
			></textarea>
			<button onclick={saveReview}>Save</button>
		</div>
	</div>
</main>
