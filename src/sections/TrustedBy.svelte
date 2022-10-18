<script>
	let builders = [
		'/svg/brand-1.svg',
		'/svg/brand-2.svg',
		'/svg/brand-3.svg',
		'/svg/brand-4.svg',
		'/svg/brand-5.svg'
	];
</script>

<div style="height:40px" />
<main>
	<p>Trusted by buidlers</p>
	<div class="images">
		{#each builders as builder}
			<img src={builder} alt="" />
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
		width: 80%;
		max-width: 800px;
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
