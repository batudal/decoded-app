<script lang="ts">
	export let data: any;
	// we can utilize svelte:element here to iterate and render
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
