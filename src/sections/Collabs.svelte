<script lang="ts">
	import SingleCard from '../components/SingleCard.svelte';

	let collabs = [
		{
			title: 'METActivists',
			type: 'NFT Project',
			image: '/svg/collab-1.svg',
			url: 'https://metactivists.io'
		},
		{
			title: 'Spinstarter',
			type: 'On-chain Launchpad',
			image: '/images/collab-2.png',
			url: 'https://spinstarter.app'
		},
		{
			title: 'House of Goblins',
			type: 'NFT / Idle Game',
			image: '/images/collab-3.png',
			url: 'https://hogs.gg'
		},
		{
			title: 'Dahl Gallery',
			type: 'Auction House',
			image: '/images/collab-4.png',
			url: 'https://dahl.gallery'
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
