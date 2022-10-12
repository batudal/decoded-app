<script lang="ts">
	import '../../../global.css';
	export let data: any;
</script>

<main>
	<div style="height:160px" />
	<h4>{data.category}</h4>
	<h1>{data.title}</h1>
	{#each data.objects as obj}
		{#if obj.type == 'img'}
			<img src={obj.content} alt="" />
			<div style="height:36px" />
		{:else if obj.type == 'to_do'}
			<p class="info">{obj.content}</p>
			<div style="height:48px" />
		{:else}
			<svelte:element this={obj.type}>
				{obj.content}
			</svelte:element>
			<div style="height:24px" />
		{/if}
	{/each}
</main>

<style>
	main {
		width: 720px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	img {
		width: 100%;
	}
	.info {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: -0.05em;
		color: rgb(255, 255, 255, 0.4);
	}
</style>
