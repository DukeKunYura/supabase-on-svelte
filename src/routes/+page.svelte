<script>
	// @ts-nocheck
	import { supabase } from '$lib/supabaseClient';

	import Adder from './Adder.svelte';
	import Post from './Post.svelte';

	/**
	 * @type {{ posts: any; }}
	 */
	export let data;
	let { posts } = data;
	$: ({ posts } = data);

	const fetchPosts = async () => {
		let { data, error } = await supabase.from('posts').select('*').order('id', { ascending: true });
		if (error) {
			console.log('error', error);
		} else {
			posts = data;
		}
	};
</script>

<div class="page">
	<Adder {fetchPosts} />
	<div class="list">
		{#each posts as post}
			<Post
				{fetchPosts}
				id={post.id}
				text={post.text}
				date={post.created_at}
				update={post.update_at}
			/>
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
