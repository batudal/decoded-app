<script lang="ts">
	import { options } from '$lib/stores/Atelier';

	export let title: string;
	export let description: string;
	let checked = false;

	const toggleCheck = () => {
		checked = !checked;
		options.update((n: Array<string>) => [...n, title]);
	};
</script>

<main>
	<img
		src={checked
			? 'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/atelier/checkbox_checked.webp'
			: 'https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/atelier/checkbox.webp'}
		alt="checkbox"
		on:click={toggleCheck}
		on:keydown
	/>
	<div class={`radio-title ${checked ? 'checked' : ''}`} on:click={toggleCheck} on:keydown>
		{title}
	</div>
	<div class="info">{description}</div>
</main>

<style>
	main {
		width: 200px;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		cursor: pointer;
	}
	main:hover .info {
		display: block;
	}
	.info {
		display: none;
		position: absolute;
		left: 90px;
		background: #0f0f0f;
		border-radius: 8px;
		font-family: 'Jost';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		color: rgba(255, 255, 255, 0.6);
		padding: 12px 16px;
		width: 100%;
		z-index: 1;
	}
	img {
		height: 24px;
	}
	.radio-title {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 600;
		font-size: 13px;
		line-height: 16px;
		color: rgba(255, 255, 255, 0.2);
	}
	.checked {
		color: #44f1a6;
	}
</style>
