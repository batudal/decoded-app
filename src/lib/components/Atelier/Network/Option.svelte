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
		<p style="margin:0px">{title}</p>
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
		border: 1px solid #44f1a6;
	}
</style>
