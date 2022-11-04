<script>
	import { bind } from "svelte/internal";

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div class="container">
	<div class="hero">
		<div class="line">
			<img
			src= {innerWidth > 567 ? 
			"https://decoded-files.fra1.digitaloceanspaces.com/web-assets/landing/hero-1-large.webp" :
			"https://decoded-files.fra1.digitaloceanspaces.com/web-assets/landing/hero-1-small.webp"}
			alt="Join the radical"
			/>		
		</div>
		<div class="pill">
			<img
			src= {innerWidth > 567 ? 
				"https://decoded-files.fra1.digitaloceanspaces.com/web-assets/landing/hero-2-large.webp" :
				"https://decoded-files.fra1.digitaloceanspaces.com/web-assets/landing/hero-2-small.webp"}
				alt="a holographic pill"
			/>
		</div>
		<div class="line z-top">
			<img
			src= {innerWidth > 567 ? 
				"https://decoded-files.fra1.digitaloceanspaces.com/web-assets/landing/hero-3-large.webp" :
				"https://decoded-files.fra1.digitaloceanspaces.com/web-assets/landing/hero-3-small.webp"}			
				alt="revoliution today"
			/>
		</div>
	</div>
	<span class="description"
		>Decoded Labs is a developer collective committed to safeguard your ventures into the ambigous
		decentralized world.
	</span>
	<a class="button" href="#contact">
		<p class="button-text">Let’s talk about your web3 project</p>
	</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	img {
		width: 100%;
		max-width: 440px;
	}
	.description {
		max-width: 480px;
		font-family: 'Jost';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		margin-top: 32px;
		text-align: center;
		color: rgba(255, 255, 255, 0.8);
	}
	.pill {
		z-index: 2;
		margin-top: -48%;
	}
	.z-top {
		z-index: 3;
		margin-top: -48%;
	}

	@media (max-width: 480px) {
		img {
			max-width: 320px;
		}
		.description {
			font-size: 13px;
			line-height: 24px;
			max-width: 236px;
			margin-top: 0;
		}
		.button-text {
			font-size: 13px;
		}
	}

</style>
