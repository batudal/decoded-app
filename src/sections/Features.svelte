<script lang="ts">
	import GradientCard from '../components/GradientCard.svelte';
	import MobileGradientCard from '../components/MobileGradientCard.svelte';

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<h4 class="gradient-text">NEVERMIND THE OBSTACLES</h4>
<main>
	{#if innerWidth > 567}
	<GradientCard
		layout="single"
		title="Specialized Partner Network"
		desc="Bring your business model to life entrusting us with the technical aspects.We provide cutting edge user experience to your clients both on and off the chain with our vast experience, understanding of user pain points  and market know-how. "
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/obs-1.webp"
	/>
	{:else}
	<MobileGradientCard
		title="Specialized Partner Network"
		desc="Bring your business model to life entrusting us with the technical aspects.We provide cutting edge user experience to your clients both on and off the chain with our vast experience, understanding of user pain points  and market know-how. "
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/obs-1.webp"
	/>
	{/if}
	{#if innerWidth > 567}
	<GradientCard
		layout={innerWidth > 1000 ? "double" : "single"}
		title="Longterm Support"
		desc="Get competitive advantage in  the fast paced market by incorporating leading practices in your token economy."
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/obs-2.webp"
	/>
	{:else}
	<MobileGradientCard
		title="Longterm Support"
		desc="Get competitive advantage in  the fast paced market by incorporating leading practices in your token economy."
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/obs-2.webp"
	/>
	{/if}
	{#if innerWidth > 567}
	<GradientCard
		layout={innerWidth > 1000 ? "double" : "single"}
		title="Quality Assurance"
		desc="Make long lasting and intelligent choices when building your strategy with the technology guidance from experienced crypto-native network."
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/obs-3.webp"
	/>
	{:else}
	<MobileGradientCard
		title="Quality Assurance"
		desc="Make long lasting and intelligent choices when building your strategy with the technology guidance from experienced crypto-native network."
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/obs-3.webp"
	/>
	{/if}
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
	@media (max-width:567px) {
		h4 {
			font-size: 14px;
			line-height: 20px;
			text-align: center;
			max-width: 234px;;
		}
	}
</style>
