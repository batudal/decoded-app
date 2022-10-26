<script lang="ts">
	import SingleCard from '../components/SingleCard.svelte';

	let innerWidth = 0;

	let projectsMobile = [
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

		let projects = [{
		title: 'METActivists',
			type: 'NFT Project',
			image:
				'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/collab-1.webp',
			url: 'https://metactivists.io'
		},
		{
			title: 'Spinstarter',
			type: 'On-chain Launchpad',
			image:
				'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/collab-2.webp',
			url: 'https://spinstarter.app'
		},
		{
			title: 'House of Goblins',
			type: 'NFT / Idle Game',
			image:
				'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/collab-3.webp',
			url: 'https://hogs.gg'
		},
		{
			title: 'dEVM',
			type: 'Private Testnet',
			image:
				'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/collab-4.webp',
			url: 'https://devmscan.com'
		}
	];
</script>

<svelte:window bind:innerWidth />
<div style="height:28px" />
<h4 id="projects" class="gradient-text">PROJECTS WE’RE CURRENTLY WORKING ON</h4>
<div style="height:16px" />
<div class="project">
	{#if innerWidth > 480}
		{#each projectsMobile as prj}
			<SingleCard title={prj.title} type={prj.type} image={prj.image} url={prj.url} />
		{/each}
		{#each projects as prj}
		<SingleCard title={prj.title} type={prj.type} image={prj.image} url={prj.url} />
		{/each}
	{:else}
		{#each projectsMobile as prj}
		<SingleCard title={prj.title} type={prj.type} image={prj.image} url={prj.url} />
		{/each}
	{/if}
</div>

<style>
	.project {
		display: grid;
		grid-template-columns: auto auto;
		gap: 32px;
	}

	@media (max-width:867px) {
		.project {
			grid-template-columns: auto ;
		}
	}
	@media (max-width:567px) {
		h4 {
			font-size: 12px;
			line-height: 17px;
			text-align: center;
		}
	}
	
</style>
