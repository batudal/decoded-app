<script lang="ts">
	export let title: any;
	export let type: any;
	export let image: any;
	export let url: any;
</script>

<a href={url} target="_blank" rel="noreferrer">
	<h3>{title}</h3>
	<p>{type}</p>
	<img src={image} alt={title} />
</a>

<style>
	a {
		width: 384px;
		height: 384px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
		backdrop-filter: blur(2px);
		border-radius: 12px;
		padding: 40px 32px;
		box-sizing: border-box;
		cursor: pointer;
	}
	img {
		width: 320px;
	}
	h3 {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: -0.05em;
		color: #ffffff;
		margin-bottom: 4px;
	}
	p {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 18px;
	}

	@media (max-width:867px) {
		a {
			width: 400px;
			height: 400px;
			padding: 40px 40px;
		}
		img {
			width: 336px;
		}
		h3,
		p {
			text-align: center;
		}
		p {
			margin-bottom: 16px;
		}
	}
	@media (max-width:567px) {
		a {
			width: 320px;
			height: 320px;
			padding: 20px 12px 16px;
		}
		img {
			width: 260px;
		}
	}
</style>
