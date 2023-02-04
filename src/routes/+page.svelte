<script>
	import { supabase } from '$lib/supabaseClient';
	async function handleClick() {
		console.log('click');
		let { data: todo, error } = await supabase
			.from('posts')
			.insert({ text: 'added' })
			.select()
			.single();
	}

	/**
	 * @type {{ posts: any; }}
	 */
	export let data;
	let { posts } = data;
	$: ({ posts } = data);
</script>

<button on:click={handleClick}> добавить </button>
<ul>
	{#each posts as posts}
		<li>{posts.text}</li>
	{/each}
</ul>
