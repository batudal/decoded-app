<script lang="ts">
	import '../global.css';
	import Hero from '../sections/Hero.svelte';
	import Projects from '../sections/Projects.svelte';
	import Form from '../sections/Form.svelte';
	import BuildingOn from '../sections/BuildingOn.svelte';
	import TrustedBy from '../sections/TrustedBy.svelte';
	import StrategicNeeds from '../sections/StrategicNeeds.svelte';
	import Features from '../sections/Features.svelte';
	import Technologies from '../sections/Technologies.svelte';
</script>

<svelte:head>
	<meta
		name="description"
		content="Decoded Labs provides many public tools and premium services such as; decentralized app, smart contract and private blockchain network development."
	/>
	<title>Decoded Labs: A developer collective focused on blockchain applications</title>
	<link rel="canonical" href="https://decoded-labs.com/" />
	<script src="https://kit.fontawesome.com/db2f0fb407.js" crossorigin="anonymous"></script>
</svelte:head>

<div style="height:240px" />
<Hero />
<div style="height:160px" />
<Projects />
<div style="height:40px" />
<BuildingOn />
<div style="height:160px" />
<StrategicNeeds />
<div style="height:60px" />
<Technologies />
<div style="height:60px" />
<Features />
<TrustedBy />
<div style="height:60px" />
<Form />
