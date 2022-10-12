<script lang="ts">
	export let title: any;
	export let type: any;
	export let image: any;
	export let url: any;
</script>

<a href={url}>
	<h3>{title}</h3>
	<div style="height:4px" />
	<p>{type}</p>
	<div style="height:18px" />
	<img src={image} alt={title} />
</a>

<style>
	a {
		width: 384px;
		height: 384px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
		backdrop-filter: blur(2px);
		border-radius: 12px;
		padding: 32px 40px;
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
		margin: 0;
	}
	p {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		color: rgba(255, 255, 255, 0.6);
		margin: 0;
	}
</style>
