<script lang="ts">
	import GradientCard from '../components/GradientCard.svelte';
	import MobileGradientCard from '../components/MobileGradientCard.svelte';
	
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<h4 id="services" class="gradient-text">WE’LL COVER YOUR STRATEGIC NEEDS</h4>
<main>
	{#if innerWidth > 567}
	<GradientCard
		layout="single"
		title="Decentralized App Development"
		desc= "Bring your business model to life entrusting us with the technical aspects.We provide cutting edge user experience to your clients both on and off the chain with our vast experience, understanding of user pain points  and market know-how. "
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-1.webp"
	/>
	{:else}
	<MobileGradientCard
		title="Decentralized App Development"
		desc= "Bring your business model to life entrusting us with the technical aspects.We provide cutting edge user experience to your clients both on and off the chain with our vast experience, understanding of user pain points  and market know-how. "
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-1.webp"
	/>
	{/if}

	{#if innerWidth > 567}
	<GradientCard
		layout= {innerWidth > 1017 ? "double" : "single"}
		title="Security Audits"
		desc="Get competitive advantage in  the fast paced market by incorporating leading practices in your token economy."
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-2.webp"
	/>
	{:else}
	<MobileGradientCard
	title="Security Audits"
	desc="Get competitive advantage in  the fast paced market by incorporating leading practices in your token economy."
	image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-2.webp"
	/>
	{/if}
	{#if innerWidth > 567}
	<GradientCard
		layout={innerWidth > 1017 ? "double" : "single"}
		title="Private Network"
		desc="Deploy your own app-chain or multi-party consensus system with features like chain explorer, bridge, oracles and more."
		image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-3.webp"
	/>
	{:else}
	<MobileGradientCard
	title="Private Network"
	desc="Deploy your own app-chain or multi-party consensus system with features like chain explorer, bridge, oracles and more."
	image="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/service-3.webp"
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
