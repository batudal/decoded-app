<div style="height:40px" />
<div class="builders">
	<p>Trusted by real builders</p>
	<div class="images">
		{#each Array(5) as _, i}
			<img
				src={`https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/brand-${
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
		font-size: 16px;
		line-height: 20px;
		letter-spacing: -0.05em;
		color: rgba(255, 255, 255, 0.8);
		margin: 0px;
	}
	.builders {
		width: 80%;
		max-width: 800px;
		height: 60px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 240px;
	}
	.images {
		display: flex;
		flex-direction: row;
		gap: 24px;
		justify-content: center;
	}
	img {
		height: 48px;
	}
	@media (max-width:950px) {
		.builders {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 120px 0;
		}
		p {
			font-size: 20px;
			line-height: 20px;
			margin-bottom: 36px;
		}
	}
	@media (max-width:567px) {
		.images {
			flex-wrap: wrap;
		}
		img {
			height: 40px;
		}
	}
</style>
