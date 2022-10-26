<script lang="ts">
	export let image: string;
	export let title: string;
	export let desc: string;
	export let layout: string;
	$: image_margin = layout + '-img';
</script>

<main class={`${layout}`}>
	<img src={image} alt="" class={image_margin} />
	<div class="content">
		<h2>{title}</h2>
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
	h2 {
		margin-bottom: 12px;
	}
	img {
		position: absolute;
		height: 240px;
	}
	.single-img {
		margin-left: -100px;
	}
	.double-img {
		margin-left: -160px;
	}
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		max-width: 440px;
		align-items: flex-start;
		justify-content: center;
	}
	p {
		margin: 0;
	}

	@media (max-width:567px) {
		h2 {
			font-size: 20px;
			line-height: 20px;
		}
		p
		{
			font-size: 12px;
			line-height: 18px;
		}
	}
</style>
