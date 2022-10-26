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
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-1.webp"
	/>
	<GradientCard
		layout= {innerWidth > 1000 ? "double" : "single"}
		title="Token Engineering"
		desc="Get competitive advantage in  the fast paced market by incorporating leading practices in your token economy."
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-2.webp"
	/>
	<GradientCard
		layout={innerWidth > 1000 ? "double" : "single"}
		title="Strategy Design"
		desc="Make long lasting and intelligent choices when building your strategy with the technology guidance from experienced crypto-native network."
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-3.webp"
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
