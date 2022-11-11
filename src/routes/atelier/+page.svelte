<script lang="ts">
	import Network from '$lib/components/Atelier/Network/Network.svelte';
	import Template from '$lib/components/Atelier/Template/Template.svelte';
	import Features from '$lib/components/Atelier/Features/Features.svelte';
	import Deploy from '$lib/components/Atelier/Deploy/Deploy.svelte';
	import { stage } from '$lib/stores/Atelier';

	const stages = [
		{ title: 'network', component: Network },
		{ title: 'template', component: Template },
		{ title: 'features', component: Features },
		{ title: 'deploy', component: Deploy }
	];
</script>

<main>
	<svelte:component this={stages[$stage].component} />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
