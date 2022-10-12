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

<h4>COLLABORATIONS</h4>
<div style="height:16px" />
<main>
	{#each collabs as prj}
		<SingleCard title={prj.title} type={prj.type} image={prj.image} url={prj.url} />
	{/each}
</main>

<style>
	main {
		width: 800px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 32px;
	}
	h4 {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.3em;
		background: linear-gradient(
			to right,
			rgba(135, 16, 203, 1),
			rgba(165, 19, 213, 1),
			rgba(220, 51, 176, 1),
			rgba(250, 76, 196, 1),
			rgba(240, 98, 159, 1),
			rgba(220, 167, 112, 1),
			rgba(217, 197, 113, 1),
			rgba(193, 202, 114, 1),
			rgba(109, 183, 107, 1)
		);
		background-clip: text;
		-webkit-background-clip: text;
		/* Make the text fill color value transparent so the masked background color comes through */
		-webkit-text-fill-color: transparent;
	}
</style>
