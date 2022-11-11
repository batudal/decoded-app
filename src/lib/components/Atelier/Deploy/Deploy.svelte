<script lang="ts">
	import Progress from '../Progress.svelte';
	import { network, template_id, name, symbol, premint_amount, options } from '$lib/stores/Atelier';

	let templates = ['ERC20', 'ERC721', 'Staking', 'Vesting'];
</script>

<div class="card">
	<div class="form">
		<h4>ATELIER</h4>
		<div style="height: 8px;" />
		<h3>Deploy your contract</h3>
		<div style="height: 20px;" />
		<p>Check out the preview and deploy your contract.</p>
		<div class="inner-card">
			<div class="property">
				<div class="prop">Network:</div>
				<div class="value">{$network}</div>
			</div>
			<div class="property">
				<div class="prop">Contract Type:</div>
				<div class="value">{templates[$template_id]}</div>
			</div>
			<div class="property">
				<div class="prop">Token name:</div>
				<div class="value">{$name}</div>
			</div>
			<div class="property">
				<div class="prop">Token symbol:</div>
				<div class="value">{$symbol}</div>
			</div>
			<div class="property">
				<div class="prop">Premint amount:</div>
				<div class="value">{$premint_amount}</div>
			</div>
			<div class="property">
				<div class="prop">Features:</div>
				<div class="value">{$options}</div>
			</div>
			<div class="property">
				<div class="prop">Transaction cost:</div>
				<div class="value">{$network}</div>
			</div>
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
	.inner-card {
		background: rgba(255, 255, 255, 0.02);
		border-radius: 8px;
		width: 432px;
		padding: 28px 32px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.prop {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		color: rgba(255, 255, 255, 0.4);
		width: 136px;
	}
	.value {
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		color: #44f1a6;
	}
	.property {
		display: flex;
		flex-direction: row;
	}
</style>
