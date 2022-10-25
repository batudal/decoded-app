<script lang="ts">
	import GradientCard from '../components/GradientCard.svelte';
	
	let innerWidth = 0;

	const desktopDesc = "Bring your business model to life entrusting us with the technical aspects.We provide cutting edge user experience to your clients both on and off the chain with our vast experience, understanding of user pain points  and market know-how. "
	const mobileDesc = "We provide cutting edge user experience to your clients both on and off the chain with our vast experience, understanding of user pain points  and market know-how. "
</script>

<svelte:window bind:innerWidth />

<h4 id="services" class="gradient-text">WE’LL COVER YOUR STRATEGIC NEEDS</h4>
<main>
	<GradientCard
		layout="single"
		title="Decentralized App Development"
		desc= {innerWidth > 767 ? desktopDesc : mobileDesc}
		image="/svg/service-1.svg"
	/>
	<GradientCard
		layout= {innerWidth > 1000 ? "double" : "single"}
		title="Token Engineering"
		desc="Get competitive advantage in  the fast paced market by incorporating leading practices in your token economy."
		image="/svg/service-2.svg"
	/>
	<GradientCard
		layout={innerWidth > 1000 ? "double" : "single"}
		title="Strategy Design"
		desc="Make long lasting and intelligent choices when building your strategy with the technology guidance from experienced crypto-native network."
		image="/svg/service-3.svg"
	/>
</main>

<style>
	main {
		width: 80%;
		max-width: 800px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 32px;
	}
</style>
