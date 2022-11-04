<script lang="ts">
	// export let post: any;
</script>

<!-- <div>
	<a href={`/articles/${post.slug}`}>
		<div class="card">
			<div class="post-info">
				<h4>{post.category}</h4>
				<p>{post.info}</p>
			</div>
			<div class="cover" style={`background-image: url(${post.src})`} />
			<h2>{post.title}</h2>
			<p>{post.description}</p>
		</div>
	</a>
</div> -->
<div>
	<a href="/articles/hacks-reentrancy">
		<div class="post-info">
			<h4>SECURITY/HACKS</h4>
			<span>written by @ReddKidd on 18/02/22</span>
		</div>
		<div class="card">
			<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0c7cef39-c899-45db-829a-a7f127c58c5f/girl-robot_%281%29.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221104T090423Z&X-Amz-Expires=3600&X-Amz-Signature=2669a0a569fa30554466ba2f9bfef76bb0ee7daa438e74a8272c90796848e42b&X-Amz-SignedHeaders=host&x-id=GetObject" 
			alt="A women talking to a robot">
			<div class="description">
				<h2>Re-entrancy</h2>
				<p>As well known, smart contracts have been notoriously vulnerable to exploits. There hasn't been a period in which no smart contract has not been exploited in the near...</p>
			</div>
		</div>
	</a>
</div>

<style>
	.card {
		width: 100%;
		max-width: 800px;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}
	.post-info {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		width: 100%;
		margin-bottom: 18px;
	}
	span {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		/* identical to box height, or 143% */

		letter-spacing: -0.05em;

		color: rgba(255, 255, 255, 0.4);
	}
	img {
		width: 100%;
		height: auto;
		object-fit: cover;
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
		gap:20px;
		width: 100%;
		max-width: 688px;
		padding-left: 48px;
		
	}
	p {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 450;
		font-size: 13px;
		line-height: 24px;
		/* or 185% */
		color: rgba(255, 255, 255, 0.8);
	}
</style>
