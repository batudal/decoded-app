<script lang="ts">
	import { gsap } from 'gsap';
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let open = false;
	let chosen = 'Field of interest';
	let items = [
		{ title: 'Smart Contract Development', fieldOfInterest: 'smartcontractdevelopment' },
		{ title: 'Fullstack Development', fieldOfInterest: 'fullstackdevelopment' },
		{ title: 'Smart Contract Audit', fieldOfInterest: 'smartcontractaudit' },
		{ title: 'Strategy Design', fieldOfInterest: 'strategydesign' }
	];

	const toggle = async () => {
		if (!open) {
			gsap.to(`.chevron`, { rotation: 90, duration: 0.2 });
		} else {
			gsap.to(`.chevron`, { rotation: 0, duration: 0.2 });
		}
		open = !open;
	};
	const setItem = async (_index: number) => {
		chosen = items[_index].title;
		dispatch('foi', {
			text: items[_index].fieldOfInterest
		});
	};
</script>

<div on:click={toggle} on:keydown class="dropdown-container">
	<div class="label">
		{chosen}
		<img class="chevron" src="/svg/right.svg" alt="chevron" />
	</div>
	{#if open}
		<div class="dropdown" transition:slide={{ duration: 200 }}>
			{#each items as item, index}
				<div on:click={() => setItem(index)} class="item" on:keydown>
					{item.title}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.dropdown-container {
		width: 100%;
	}
	.label {
		color: rgba(255, 255, 255, 0.4);
		height: 60px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.2);
		font-size: 1.25rem;
		line-height: 2rem;
		font-family: 'Jost';
		font-weight: 400;
		position: relative;
		transition: 0.1s linear;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-radius: 8px;
		font-style: normal;
		font-size: 20px;
		line-height: 32px;
		padding: 0px 20px;
	}

	img {
		position: absolute;
		right: 1.5rem;
		top: 1rem;
		width: 1.5rem;
		height: 1.5rem;
	}
	.dropdown {
		position: relative;
		flex: 1;
		height: 12rem;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.2);
		font-size: 1.25rem;
		line-height: 2rem;
		font-weight: 400;
		margin: 0;
		border-radius: 12px;
		box-sizing: border-box;
		transition: 0.1s linear;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: space-between;
		justify-content: center;
		cursor: pointer;
		margin-top: 4px;
	}
	.item {
		font-family: 'Jost';
		font-weight: 400;
		color: rgba(255, 255, 255, 0.4);
		padding: 0px 20px;
		height: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.item:hover {
		color: rgba(255, 255, 255, 0.8);
		background-color: rgba(0, 0, 0, 1);
	}

	@media (max-width:567px) {
		.label,
		.dropdown {
			font-size: 1rem;
			line-height: 2rem;
		}
	}
</style>
