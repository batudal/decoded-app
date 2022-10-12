<main>
	<img src="/images/rocket.png" alt="rocket" />
	<div style="width:64px" />
	<div class="content">
		<h2>Technologies we love and use</h2>
		<div style="height:32px" />
		<div class="items">
			{#each Array(18) as _, i}
				<img src={`svg/tech-${i + 1}.svg`} alt="" />
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		width: 800px;
		height: 400px;
		padding: 106px 0px;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
	}
	main > img {
		height: 191px;
	}
	.content {
		width: 540px;
	}
	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
