<script lang="ts">
	import GradientCard from '../components/GradientCard.svelte';
</script>

<h4>WE’LL COVER YOUR STRATEGIC NEEDS</h4>
<main>
	<GradientCard
		layout="single"
		title="Decentralized App Development"
		desc="Bring your business model to life entrusting us with the technical aspects.We provide cutting edge user experience to your clients both on and off the chain with our vast experience, understanding of user pain points  and market know-how. "
		image="/svg/service-1.svg"
	/>
	<GradientCard
		layout="double"
		title="Token Engineering"
		desc="Get competitive advantage in  the fast paced market by incorporating leading practices in your token economy."
		image="/svg/service-2.svg"
	/>
	<GradientCard
		layout="double"
		title="Strategy Design"
		desc="Make long lasting and intelligent choices when building your strategy with the technology guidance from experienced crypto-native network."
		image="/svg/service-3.svg"
	/>
</main>

<style>
	main {
		width: 800px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 32px;
	}
</style>
