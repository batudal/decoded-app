<script lang="ts">
	export let image: string;
	export let title: string;
	export let desc: string;
	export let layout: string;
	$: image_margin = layout + '-img';
</script>

<main class={`${layout}`}>
		<div class="img-container">
			<img src={image} alt="" class={image_margin} />
		</div>
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
		main {
			/* height: 466px; */
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			background: none;
			align-items:center;
			justify-content: center;
			gap:24px;
		}
		.img-container {
			height: 200px;
			width: 300px;
			background: linear-gradient(94.7deg, rgba(255, 255, 255, 0.07) 1.77%, rgba(255, 255, 255, 0) 100%);
			border: 1px solid rgba(255, 255, 255, 0.2);
			border-radius: 12px;
			backdrop-filter: blur(2px);
		}
		.single-img,
		.double-img {
			margin: 0;
			height: 200px;
		}
		.single > .content,
		.double > .content {
			margin: 0;
			max-width: 276px;
		}

		h2 {
			font-size: 32px;
			line-height: 32px;
		}
		p
		{
			font-size: 16px;
			line-height: 22px;
		}
	}
</style>
