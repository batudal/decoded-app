<script lang="ts">
	import '../../../global.css';
	import '../../../prism-theme.css';
	import Prism from 'prismjs';
	import RelatedCards from '../../../components/RelatedCards.svelte';
	export let data: any;
</script>

<svelte:head>
	<title>
		{data.title}
	</title>
	<script src="https://kit.fontawesome.com/db2f0fb407.js" crossorigin="anonymous"></script>

</svelte:head>

<div class="container">
		<div style="height:160px" />
		<h4>{data.category}</h4>
		<h1>{data.title}</h1>
		{#each data.objects as obj}
			{#if obj.type == 'img'}
				<img src={obj.content} alt="" />
			{:else if obj.type == 'to_do'}
				<p class="info">{obj.content}</p>
			{:else if obj.type == 'callout'}
				<div class="callout-container">
					<span class="callout-text">{obj.content}</span>
					<a href={obj.url} class="callout-link callout-text">{obj.linkText}</a>
				</div>
			{:else if obj.type == 'code'}
				<pre class="language-solidity">
					{@html Prism.highlight(obj.content, Prism.languages.javascript, 'solidity')}
				</pre>
			{:else}
				<svelte:element this={obj.type}>
					{obj.content}
				</svelte:element>
			{/if}
		{/each}
		<div style="height:72px" />
		<RelatedCards posts={data.related_posts} />
		<div style="height:96px" />
</div>

<style>
	.container {
		max-width: 800px;
		padding: 0 80px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		flex-wrap: wrap;
		min-width: 0;
	}
	img {
		max-width: 100%;
		height: auto;
		margin: 0 0 36px;
	}
	.info {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: -0.05em;
		color: rgb(255, 255, 255, 0.4);
		margin: 0 0 48px;
	}
	p {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 400;
		font-size: 13px;
		line-height: 24px;
		/* or 185% */

		color: rgba(255, 255, 255, 0.8);
	}
	.callout-text {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		/* identical to box height, or 125% */
		letter-spacing: -0.05em;
		color: #ffffff;
	}
	h2 {
		margin-bottom: 24px;
	}
	h4 {
		color: #44f1a6;
	}

	.callout-link {
		color: #44f1a6;
		text-decoration: underline;
	}

	.callout-container {
		background: #151515;
		backdrop-filter: blur(2.5px);
		border-radius: 8px;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
		padding: 12px;
		margin: 16px 0 40px;
		width: 100%;
	}

	pre {
		margin: 0 0 40px;
		width: 100%;
		max-width: 800px;
		white-space: pre-wrap;
	}

	@media (max-width:833px) {
		.callout-container {
			justify-content: flex-start;
		}
	}
	
	@media (max-width:767px) {
		h4,
		.info {
			font-size: 12px;
		}
	}
	@media (max-width:567px) {
		img {
			height: 200px;
			object-fit: cover;
	}
	}
	@media (max-width:420px) {
		img {
			height: 150px;
	}
	}
</style>
