<script>
	// @ts-nocheck

	import { addPost } from '../lib/supabaseActions';
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
	<Post id={post.id} text={post.text} date={post.created_at} update={post.update_at} />
{/each}
