<script lang="ts">
	export let posts: any;
</script>

<div>
	{#each posts as post}
	<div class="line"></div>
	<a href={`/articles/${post.slug}`}>
		<div class="post-info">
			<h2>{post.title}</h2>
			<h4>SECURITY/HACKS</h4>
		</div>
		<div class="card">
			<div class="description">
				<p>As well known, smart contracts have been notoriously vulnerable to exploits. There hasn't been a period in which no smart contract has not been exploi			
				<span class="info">{post.info}</span>
			</div>
		</div>
	</a>
	{/each}
</div>

<style>
	.line {
		padding-top: 52px;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}
	a {
		width: 100%;
	}
	.card {
		width: 100%;
		max-width: 600px;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}
	.post-info {
		display: flex;
		justify-content:flex-start;
		gap:12px;
		align-items: baseline;
		width: 100%;
	}
	.info {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		/* identical to box height, or 143% */

		letter-spacing: -0.05em;

		color: rgba(255, 255, 255, 0.4);
	}
	h4 {
		color: #44f1a6;
	}
	h2 {
		margin: 0px;
		font-family: 'Jost';
		font-style: normal;
		font-weight: 600;
		font-size: 48px;
		line-height: 80px;
		letter-spacing: -0.05em;
		color: #ffffff;
	}
	.description {
		display: flex;
		flex-direction: column;
		gap:12px;
		width: 100%;
		max-width: 600px;
		margin-bottom: 52px;
		
	}
	p {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 450;
		font-size: 13px;
		line-height: 24px;
		/* or 185% */
		color: rgba(255, 255, 255, 0.8);
		margin:0;
	}

	@media (max-width:567px) {
		.post-info {
			flex-direction: column;
			gap:0px;
		}
		h2 {
			font-size: 36px;
			line-height: 60px;
		}
		h4,
		.info,
		p {
			font-size: 12px;
		}
		.description {
			margin-top: 12px;
			gap:12px;
		}
	}
</style>
