<script lang="ts">
	export let image: string;
	export let title: string;
	export let desc: string;
</script>

<div class="mobile-gradient-card">
    <div class="img-container">
        <img src={image} alt="" />
    </div>
    <div class="content">
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
</div>

<style>
	.mobile-gradient-card {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:24px;
        margin: 0 auto;
	}
    .img-container {
        height: 200px;
        width: 300px;
        background: linear-gradient(94.7deg, rgba(255, 255, 255, 0.07) 1.77%, rgba(255, 255, 255, 0) 100%);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        backdrop-filter: blur(2px);
    }
	h2 {
		margin-bottom: 16px;
        max-width: 257px;

	}
	img {
		height: 200px;
	}
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		max-width: 440px;
		align-items: flex-start;
		justify-content: center;
	}
	p {
        width: 276px;
	}
</style>
