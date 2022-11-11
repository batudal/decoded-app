<script lang="ts">
	import { network, stage_fulfilled } from '$lib/stores/Atelier';
	export let title: string;
	export let icon: string;

	const choose = () => {
		network.set(title);
		stage_fulfilled.set(true);
	};
</script>

<div class={`option ${$network == title ? 'chosen' : ''}`} on:click={choose} on:keydown>
	<div class="network">
		<img
			src={`https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/atelier/${icon}`}
			style="height: 20px"
			alt="Network Icon"
		/>
		<div style="width: 8px;" />
		<p>{title}</p>
	</div>
</div>

<style>
	.option {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 14px 12px 14px 16px;
		background: rgba(255, 255, 255, 0.02);
		border-radius: 12px;
		justify-content: space-between;
		cursor: pointer;
		box-sizing: border-box;
	}
	.option:hover {
		background: rgba(255, 255, 255, 0.04);
	}
	.network {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.chosen {
		background: rgba(255, 255, 255, 0.06);
	}
	p {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		color: #ffffff;
		margin: 0px;
	}
</style>
