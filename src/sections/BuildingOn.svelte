<main>
	<p>Currently building on</p>
	<div class="images">
		{#each Array(8) as _, i}
			<img
				src={`https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/network-${
					i + 1
				}.webp`}
				alt=""
			/>
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
		margin: 0px;
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
	}
	img {
		height: 60px;
	}
</style>
