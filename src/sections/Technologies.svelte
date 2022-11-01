<script>
let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="technologies-container">
	<img
		src="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/rocket.webp"
		alt="rocket"
	/>
	<div class="content">
		<h2>Technologies we love and use</h2>
		<div class="items">
			{#if innerWidth > 468}
				{#each Array(18) as _, i}
					<img
						src={`https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/tech-${
							i + 1
						}.webp`}
						alt=""
					/>
				{/each}
			{:else}
				{#each Array(15) as _, i}
				<img
					src={`https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/tech-${
						i + 1
					}.webp`}
					alt=""
				/>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	.technologies-container {
		width: 80%;
		max-width: 800px;
		padding: 106px 0px;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
	}
	.technologies-container > img {
		height: 191px;
		margin-right: 64px;
	}
	.items > img {
		height: 60px;
	}
	.content {
		width: 67.5%;
	}
	
	h2 {
		margin-bottom: 32px;
	}
	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	@media (max-width:792px) {
		h2 {
			font-size: 24px;
			line-height: 36px;
			letter-spacing: -0.05em;
			color: rgba(255, 255, 255, 0.6);
		}
		.content,
		.technologies-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.technologies-container > img {
		height: 191px;
		margin: 0 0 30px;
		}
		.content {
			width: 100%;
		}
		.items {
			justify-content: center;
		}
	}
	@media (max-width:567px) {
	}
</style>
