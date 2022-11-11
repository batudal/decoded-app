<script lang="ts">
	import Dropdown from '../components/Dropdown.svelte';
	let email: string;
	let foi: string;
	let message: string;
	let result;

	const postData = async () => {
		if (!foi) {
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
		}
	};
	const handleFOI = (event: any) => (foi = event.detail.text);
</script>

<div id="contact" class="contacts">
	<div style="height:120px;" />
	<h2>Let's talk business.</h2>
	<div class="form-group">
		<input bind:value={email} type="text" placeholder="Enter your email" required />
		<Dropdown on:foi={handleFOI} />
		<textarea bind:value={message} placeholder="Your message" required />
		<div class="button" on:click={postData} on:keydown>
			<p>Send message</p>
		</div>
	</div>
	<div style="height:120px;" />
</div>

<style>
	.contacts {
		width: 100%;
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
		gap: 10px;
		width: 70%;
		max-width: 664px;
	}
	h2 {
		margin-bottom: 36px;
		font-weight: 600;
		font-size: 64px;
		line-height: 80px;
		text-align: center;
		letter-spacing: -0.05em;
	}
	input,
	textarea {
		box-sizing: border-box;
		width: 100%;
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
		width: 100%;
	}
	@media (max-width: 567px) {
		h2 {
			font-size: 48px;
			line-height: 60px;
			margin-bottom: 28px;
		}
		input,
		textarea {
			font-size: 16px;
			line-height: 32px;
		}
		p {
			font-size: 13px;
			line-height: 32px;
		}
	}

	@media (max-width: 480px) {
		h2 {
			max-width: 267px;
		}
	}
</style>
