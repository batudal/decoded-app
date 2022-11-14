<script lang="ts">
	import { stage, stage_fulfilled } from '$lib/stores/Atelier';
	const next = () => {
		if ($stage_fulfilled) {
			stage.update((n) => n + 1);
		}
	};
</script>

<main>
	<div class="progress-wrapper">
		<div class="progress">
			<div class="progress-bar">
				{#each new Array(4) as _, i}
					<div
						class={`circle ${$stage > i ? 'past-circle' : $stage == i ? 'current-circle' : ''}`}
					/>
					{#if i < 3}
						<div class={`line ${$stage > i ? 'past-line' : ''}`} />
					{/if}
				{/each}
			</div>
			<div class="progress-text">
				<p class={`progress-text-title ${$stage >= 0 ? 'progress-text-title-past' : ''}`}>
					Network
				</p>
				<div style="height:36px;" />
				<p class={`progress-text-title ${$stage >= 1 ? 'progress-text-title-past' : ''}`}>
					Template
				</p>
				<div style="height:36px;" />
				<p class={`progress-text-title ${$stage >= 2 ? 'progress-text-title-past' : ''}`}>
					Features
				</p>
				<div style="height:36px;" />
				<p class={`progress-text-title ${$stage >= 3 ? 'progress-text-title-past' : ''}`}>Deploy</p>
			</div>
		</div>
	</div>
	{#if $stage >= 3}
		<div class="button button-fulfilled">Deploy</div>
	{:else}
		<div class={`button ${$stage_fulfilled ? 'button-fulfilled' : ''}`} on:click={next} on:keydown>
			Next
		</div>
	{/if}
</main>

<style>
	main {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.progress-wrapper {
		width: 100%;
		background: rgba(0, 0, 0, 0.2);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
	.progress {
		width: 256px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.progress-bar {
		margin-left: 72px;
		height: 240px;
		width: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.progress-text-title {
		font-family: 'Fira Code';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 12px;
		color: rgba(255, 255, 255, 0.2);
		margin-left: 8px;
	}
	.progress-text-title-past {
		color: #44f1a6;
	}
	.circle {
		height: 12px;
		width: 12px;
		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		box-sizing: border-box;
	}
	.current-circle {
		border: 2px solid #44f1a6;
	}
	.past-circle {
		background: #44f1a6;
	}
	.line {
		height: 60px;
		border-left: 2px solid rgba(255, 255, 255, 0.2);
	}
	.past-line {
		border-left: 2px solid #44f1a6;
	}
	.button {
		height: 40px;
		width: 100%;
		border-radius: 0px 0px 20px 0px;
		font-family: 'Jost';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 16px;
		color: rgba(255, 255, 255, 0.2);
		border: none;
	}
	.button-fulfilled {
		border: 2px solid #44f1a6;
		color: #44f1a6;
	}
</style>
