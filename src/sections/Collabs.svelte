<script lang="ts">
	import SingleCard from '../components/SingleCard.svelte';

	let collabs = [
		{
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

<h4 class="gradient-text">COLLABORATIONS</h4>
<div style="height:16px" />
<main>
	{#each collabs as prj}
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
