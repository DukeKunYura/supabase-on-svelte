<script>
	// @ts-nocheck

	import { addPost } from '../lib/supabaseActions';

	let inputValue = '';
	export let fetchPosts = () => {};

	async function handlerAdder() {
		await addPost(inputValue);
		fetchPosts();
		inputValue = '';
	}
</script>

<div class="container">
	<form class="form" on:submit|preventDefault={handlerAdder}>
		<input type="text" value={inputValue} on:input={(event) => (inputValue = event.target.value)} />
		<button type="submit">Отправить</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		background-color: rgb(226, 226, 226);
		max-width: 600px;
		width: 80%;
		height: 100px;
		padding: 10px;
		margin: 10px;
		border-radius: 10px;
	}
	.form {
		display: flex;
		flex-direction: column;
		height: 90px;
		justify-content: space-around;
		align-items: center;
	}
	input {
		height: 40px;
		width: 90%;
		text-align: center;
		border-color: rgb(226, 226, 226);
		border-radius: 10px;
	}
	button {
		height: 30px;
		width: 200px;
		border-radius: 10px;
		background-color: white;
		border-style: none;
	}
	button {
		width: 100px;
	}
</style>
