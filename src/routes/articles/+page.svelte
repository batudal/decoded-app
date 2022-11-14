<script lang="ts">
    import '../../global.css';
    import ArticleCard from "../../components/ArticleCard.svelte";
	export let data: any;
	console.log(data.all_posts);
</script>

<svelte:head>
	<meta
		name="description"
		content="Decoded Labs provides many public tools and premium services such as; decentralized app, smart contract and private blockchain network development."
	/>
	<title>Articles</title>
	<link rel="canonical" href="https://decoded-labs.com/articles" />
	<script src="https://kit.fontawesome.com/db2f0fb407.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="container">
    <div class="categories">
        <span>ALL</span>
        <span>SECURITY</span>
        <span>OPTIMIZATION</span>
        <span>DAPPS</span>
    </div>
    <ArticleCard posts={data.all_posts}/>
</div>

<style>
    .container {
        margin-top: 200px;
        padding: 0 20px;
    }
    .categories {
        display: flex;
        gap: 16px;
        margin-bottom: 16px;
    }
    .categories > span {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
    }
    span:hover {
		color: rgba(68, 241, 166, 1);
	}

</style>
