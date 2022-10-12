<script lang="ts">
	import Dropdown from '../components/Dropdown.svelte';
	let email: string;
	let chosen: string = 'Field of interest';
	let foi: string;
	let message: string;
	let result = null;

	// rework with event dispatcher
	const postData = async () => {
		if (chosen == 'Field of interest') {
			return;
		} else {
			const res = await fetch('https://api.decoded-labs.com/api/collections/submission/records', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: email,
					message: message,
					foi: foi
				})
			});

			const json = await res.json();
			result = JSON.stringify(json);
			console.log(result);
		}
	};
</script>

<main>
	<div style="height:120px;" />
	<h1>Let's talk business.</h1>
	<div style="height:36px;" />
	<div class="form-group">
		<input bind:value={email} type="text" placeholder="Enter your email" required />
		<Dropdown />
		<textarea bind:value={message} placeholder="Your message" required />
		<a class="button" href="#contact">
			<p>Send message</p>
		</a>
	</div>
	<div style="height:120px;" />
</main>

<style>
	main {
		width: 100%;
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(2px);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.form-group {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
		backdrop-filter: blur(2px);
		border-radius: 12px;
		padding: 24px 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}
	input,
	textarea {
		box-sizing: border-box;
		width: 600px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		font-family: 'Jost';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 32px;
		color: rgba(255, 255, 255, 0.8);
		padding: 20px;
	}
	input {
		height: 60px;
	}
	textarea {
		height: 180px;
	}
	.button {
		width: 600px;
	}
</style>
