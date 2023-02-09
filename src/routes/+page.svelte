<script>
	// @ts-nocheck

	import Adder from './Adder.svelte';
	import Post from './Post.svelte';

	/**
	 * @type {{ posts: any; }}
	 */
	export let data;
	let { posts } = data;
	$: ({ posts } = data);
</script>

<div class="page">
	<Adder />
	<div class="list">
		{#each posts as post}
			<Post id={post.id} text={post.text} date={post.created_at} update={post.update_at} />
		{/each}
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.list {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		max-width: 600px;
		width: 80%;
	}
</style>
