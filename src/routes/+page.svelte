<script>
	// You can add any necessary script logic here
	import './home.css';
	import HomeCard from '$lib/home cards/homeCards.svelte';
</script>

<div class="home">
	<div class="banner">
		<div class="bannerText">
			<h1>The most Popular site for interplanetary travel.</h1>
			<p>Visit new worlds today!</p>
		</div>
	</div>

	<div class="homeCardTitleText">
		<h2>Recommended Places to visit</h2>
	</div>
	<div class="homeCardsSection">
		<HomeCard planetName={'planet1'} rating={'3.5'} price={'price'} />

		<HomeCard planetName={'planet2'} rating={'4.5'} price={'price2'} />

		<HomeCard planetName={'planet3'} rating={'4.7'} price={'price3'} />
	</div>
</div>
