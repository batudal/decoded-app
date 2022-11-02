<div class="networks">
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
</div>

<style>
	p {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 20px;
		letter-spacing: -0.05em;
		color: rgba(255, 255, 255, 0.8);
		margin: 0px;
	}
	.networks {
		width: 80%;
		max-width: 800px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 160px;
	}
	.images {
		display: flex;
		flex-direction: row;
	}
	img {
		height: 60px;
	}

	@media (max-width:867px) {
		.networks {
			flex-direction: column;
			gap:32px;
		}
	}
	@media (max-width:567px) {
		.images {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
