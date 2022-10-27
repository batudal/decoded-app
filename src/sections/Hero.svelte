<div class="container">
	<div class="hero">
		<!-- !! WE NEED TO MERGE H1's INTO ONE FOR SEO-->
		<div class="line">
			<h1 class="font-white t-large z-bottom">Join the radical</h1>
		</div>
		<img
			src="https://decoded-files.fra1.cdn.digitaloceanspaces.com/web-assets/landing/pill.webp"
			alt="a holographic pill"
		/>
		<div class="line"><h1 class="font-white t-large z-top">revolution today.</h1></div>
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
	h1 {
		position: relative;
		z-index: 1;
		transition: 0.3s ease;
	}
	img {
		position: absolute;
		z-index: 1;
		margin-top: 50px;
		width: 180px;
	}
	.z-top {
		z-index: 3;
	}
	@media (max-width: 767px) {
		img {
			width: 140px;
			bottom: 36%;
		}
	}

	@media (max-width: 567px) {
		img {
			width: 100px;
			bottom: 42%;
		}
		h1 {
			font-size: 40px;
			line-height: 60px;
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
