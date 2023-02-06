<script>
	// @ts-nocheck

	import { addPost, deletePost, updatePost } from '../lib/supabaseActions';
	import Post from './Post.svelte';

	/**
	 * @type {{ posts: any; }}
	 */
	export let data;
	let { posts } = data;
	$: ({ posts } = data);
</script>

<button on:click={addPost}> добавить </button>
{#each posts as post}
	<Post
		text={post.text}
		handleDelete={() => {
			deletePost(post.id);
		}}
		handleUpdate={() => {
			updatePost(post.id, 'updated');
		}}
		date={post.created_at}
	/>
{/each}
