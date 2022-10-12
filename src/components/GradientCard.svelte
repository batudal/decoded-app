<script lang="ts">
	export let image: string;
	export let title: string;
	export let desc: string;
	export let layout: string;
</script>

<main class={`${layout}`}>
	<img src={image} alt="" />
	<div class="content">
		<h2>{title}</h2>
		<div style="height:12px;" />
		<p>{desc}</p>
	</div>
</main>

<style>
	main {
		position: relative;
		height: 240px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
		border-radius: 12px;
	}
	.single {
		width: 800px;
	}
	.double {
		width: 384px;
	}
	.single > .content {
		margin-left: 227px;
	}
	.double > .content {
		margin-left: 117px;
	}
	img {
		position: absolute;
	}
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		max-width: 440px;
		align-items: flex-start;
		justify-content: center;
	}
</style>
