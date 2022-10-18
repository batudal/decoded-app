<div class="container">
	<nav>
		<img src="/svg/logo.svg" alt="logo" />
		<div class="menu">
			<a title="Projects" class="active" href="#projects">Projects</a>
			<a title="Atelier" class="active" href="#projects">Atelier</a>
			<a title="Articles" href="#services">Articles</a>
			<a title="Services" href="#services">Services</a>
			<a title="Contact" href="#contact">Contact</a>
		</div>
	</nav>
</div>

<style>
	.container {
		position: fixed;
		z-index: 100;
		width: 100vw;
		height: 160px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(
			180deg,
			#000000 15%,
			rgba(0, 0, 0, 0.52) 68.46%,
			rgba(0, 0, 0, 0) 100%
		);
	}
	nav {
		width: 80%;
		max-width: 800px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 32px;
	}
	.menu {
		display: flex;
		flex-direction: row;
		gap: 28px;
		align-items: center;
	}
	.menu > a {
		width: 40px;
		font-family: 'Jost';
		font-style: normal;
		font-weight: 400;
		font-size: 13px;
		line-height: 16px;
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
	}
	.menu > a:hover {
		font-weight: 500;
		color: rgba(68, 241, 166, 1);
	}
	@media (max-width:767px) {
	}
	@media (max-width:567px) {
	}
</style>
