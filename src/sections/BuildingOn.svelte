<script>
	let networks = [
		'/images/eth.png',
		'/images/stark.png',
		'/images/bsc.png',
		'/images/polygon.png',
		'/images/arbitrum.png',
		'/images/optimism.png',
		'/images/blue.png',
		'/images/solana.png'
	];
</script>

<div style="height:40px" />
<main>
	<p>Currently building on</p>
	<div class="images">
		{#each networks as network}
			<img src={network} alt="" />
		{/each}
	</div>
</main>

<style>
	p {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		letter-spacing: -0.05em;
		color: rgba(255, 255, 255, 0.8);
	}
	main {
		width: 800px;
		height: 60px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.images {
		display: flex;
		flex-direction: row;
		gap: 24px;
	}
	img {
		height: 32px;
	}
</style>
