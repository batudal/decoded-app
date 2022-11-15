<script lang="ts">
	export let posts: any;
</script>

<div>
	<h4>RELATED ARTICLES</h4>
	<div style="height:16px" />
	<div class="cards-container">
	{#each posts as post}
		<a href={`/articles/${post.slug}`}>
			<div class="card">
				<div class="cover" style={`background-image: url(${post.src})`} />
				<div style="height:24px" />
				<h2>{post.title}</h2>
				<div style="height:8px" />
				<p>{post.date}</p>
			</div>
		</a>
	{/each}
	</div>
</div>

<style>
	.cards-container {
		display: flex;
		width: 100%;
		justify-content: flex-start;
		gap:18px;
		flex-wrap: wrap;
	}
	.card {
		height: 240px;
		width: 256px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
		border-radius: 12px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}
	.cover {
		height: 132px;
		width: 100%;
		background-size: cover;
	}
	h4 {
		color: #44f1a6;
	}
	h2 {
		margin: 0px;
		font-family: 'Jost';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: -0.05em;
		color: #ffffff;
	}
	p {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		color: rgba(255, 255, 255, 0.6);
	}
</style>
