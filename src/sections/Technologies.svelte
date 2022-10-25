<main>
	<img src="/images/rocket.png" alt="rocket" />
	<div class="content">
		<h2>Technologies we love and use</h2>
		<div class="items">
			{#each Array(18) as _, i}
				<img src={`svg/tech-${i + 1}.svg`} alt="" />
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		width: 80%;
		max-width: 800px;
		padding: 106px 0px;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
	}
	main > img {
		height: 191px;
		margin-right: 64px;
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
	@media (max-width:810px) {
		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		main > img {
			display: none;
		}
		.content {
			width: 100%;
		}
	}
	@media (max-width:567px) {
	}
</style>
