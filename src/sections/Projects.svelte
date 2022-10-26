<script lang="ts">
	import SingleCard from '../components/SingleCard.svelte';

	let projects = [
		{
			title: 'Nether Protocol',
			type: 'Ether Treasury',
			image:
				'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/project-1.webp',
			url: 'https://nether.finance'
		},
		{
			title: 'Deadly Games',
			type: 'Decentralized Playground',
			image:
				'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/project-2.webp',
			url: 'https://deadly.games'
		},
		{
			title: 'Micro Colonies',
			type: 'NFT Collection / Idle Game',
			image:
				'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/project-3.webp',
			url: 'https://microcolonies.com'
		},
		{
			title: 'Fungible Future',
			type: 'NFT Derivaties',
			image:
				'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/project-4.webp',
			url: 'https://fungiblefuture.com'
		}
	];
</script>

<div style="height:28px" />
<h4 id="projects" class="gradient-text">PROJECTS WE’RE COOKING</h4>
<div style="height:16px" />
<main>
	{#each projects as prj}
		<SingleCard title={prj.title} type={prj.type} image={prj.image} url={prj.url} />
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: auto auto;
		gap: 32px;
	}

	@media (max-width:867px) {
		main {
			grid-template-columns: auto ;
		}
	}
	
</style>
