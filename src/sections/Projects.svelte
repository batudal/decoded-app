<script lang="ts">
	import SingleCard from '../components/SingleCard.svelte';

	let projects = [
		{
			title: 'Nether Protocol',
			type: 'Ether Treasury',
			image: '/images/prj-1.png',
			url: 'https://nether.finance'
		},
		{
			title: 'Deadly Games',
			type: 'Decentralized Playground',
			image: '/images/prj-2.png',
			url: 'https://deadly.games'
		},
		{
			title: 'Micro Colonies',
			type: 'NFT Collection / Idle Game',
			image: '/images/prj-3.png',
			url: 'https://microcolonies.com'
		},
		{
			title: 'Fungible Future',
			type: 'NFT Derivaties',
			image: '/images/prj-4.png',
			url: 'https://fungiblefuture.com'
		}
	];
</script>

<div style="height:28px" />
<h4 id="projects">PROJECTS WE’RE COOKING</h4>
<div style="height:16px" />
<main>
	{#each projects as prj}
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
