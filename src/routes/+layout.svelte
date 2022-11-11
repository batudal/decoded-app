<script>
	import 'global.css';
	import Header from '../sections/Navigation.svelte';
	import Footer from '../sections/Footer.svelte';
</script>

<main>
	<Header />
	<slot />
	<Footer />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100vh;
	}
</style>
