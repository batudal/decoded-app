<script lang="ts">
	import Option from './Option.svelte';
	import Progress from '../Progress.svelte';
	import { stage_fulfilled } from '$lib/stores/Atelier';
	import { onMount } from 'svelte';

	onMount(() => {
		stage_fulfilled.set(false);
	});
</script>

<div class="card">
	<div class="form">
		<h4>ATELIER</h4>
		<div style="height: 8px;" />
		<h3>Network selection</h3>
		<div style="height: 20px;" />
		<p>
			Pick your contract template. For more information follow the external links to our blog posts.
		</p>
		<div style="height: 20px;" />
		<Option title="Ethereum" icon="ethereum.webp" />
		<div style="height: 8px;" />
		<Option title="Binance" icon="binance.webp" />
		<div style="height: 8px;" />
		<Option title="Decoded Labs" icon="decoded.webp" />
		<div style="height: 8px;" />
		<Option title="Starknet" icon="starknet.webp" />
	</div>
	<Progress />
</div>

<style>
	.card {
		margin-top: 120px; /* remove later */
		display: flex;
		flex-direction: row;
		background: rgba(255, 255, 255, 0.04);
		border-radius: 20px;
		border-radius: 20px;
		width: 800px;
		height: 600px;
		margin-bottom: auto;
	}
	.form {
		width: 556px;
		padding: 72px;
		box-sizing: border-box;
	}
	h4 {
		color: #44f1a6;
	}
	h3 {
		color: white;
	}
</style>
