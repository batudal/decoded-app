<script lang="ts">
    import '../../global.css';
    import ArticleCard from "../../components/ArticleCard.svelte";
	export let data: any;
	console.log(data.all_posts);
</script>

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
        margin-top: 220px;
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