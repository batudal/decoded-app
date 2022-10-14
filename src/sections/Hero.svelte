<div class="container">
	<div class="hero">
		<div class="line"> <h1 class="font-white t-large z-bottom font-semi-bold">Join the radical </h1></div>
        <img src="/svg/pill.svg" alt="a holographic pill">
        <div class="line"><h1 class="font-white t-large z-top">revolution today. </h1></div>
	</div>
	<span
		>Decoded Labs is a developer collective committed to safeguard your ventures into the ambigous
		decentralized world.
	</span>
	<a class="button" href="#contact">
		<p>Let’s talk about your web3 project</p>
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
	span {
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
	h1{
		position: relative;
		z-index: 1;
		transition: .3s ease;
	}
	img{
		position: absolute;
		z-index: 2;
		bottom: 30%; 

	}
	@media (max-width:767px) {
			img{
				width: 140px;
				bottom: 37%;
			}
		}
		
		@media (max-width:567px) {
			img{
				width: 100px;
				bottom: 44%;
			}
		}
	.z-top{
		z-index: 3;
	}
</style>
