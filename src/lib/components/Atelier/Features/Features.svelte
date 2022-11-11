<script lang="ts">
	import Progress from '../Progress.svelte';
	import { stage_fulfilled, name, symbol, premint_amount } from '$lib/stores/Atelier';
	import { onMount } from 'svelte';
	import Radio from './Radio.svelte';

	onMount(() => {
		stage_fulfilled.set(false);
	});
	$: if ($name && $symbol && $premint_amount) {
		stage_fulfilled.set(true);
	}
</script>

<div class="card">
	<div class="form">
		<h4>ATELIER</h4>
		<div style="height: 8px;" />
		<h3>Choose features</h3>
		<div style="height: 20px;" />
		<p>Pick features for your X contract. You can add up to 5 features with free version.</p>
		<div style="height: 20px;" />
		<input type="text" placeholder="Token name" bind:value={$name} />
		<div style="height: 8px;" />
		<input type="text" placeholder="Token symbol" bind:value={$symbol} />
		<div style="height: 8px;" />
		<input type="number" placeholder="Premint amount" bind:value={$premint_amount} />
		<div style="height: 40px;" />
		<div class="radio-wrapper">
			<Radio
				title="Mintable"
				description="Token holders will be able to mint more tokens in future."
			/>
			<Radio title="Burnable" description="Token holders will be able to destroy their tokens." />
			<Radio title="Pausable" description="Token holders will be able to destroy their tokens." />
			<Radio title="Permit" description="Token holders will be able to destroy their tokens." />
			<Radio title="Votes" description="Token holders will be able to destroy their tokens." />
			<Radio
				title="Flash minting"
				description="Token holders will be able to destroy their tokens."
			/>
			<Radio title="Snapshots" description="Token holders will be able to destroy their tokens." />
		</div>
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
	input {
		width: 400px;
		height: 44px;
		background: rgba(255, 255, 255, 0.02);
		border-radius: 12px;
		border: none;
		padding: 20px 14px;
		box-sizing: border-box;
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		/* identical to box height, or 133% */

		color: #ffffff;
	}
	.radio-wrapper {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		height: 120px;
		gap: 8px;
	}
</style>
