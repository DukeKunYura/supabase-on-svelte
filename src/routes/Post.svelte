<script>
	// @ts-nocheck

	import { deletePost, updatePost } from '../lib/supabaseActions';
	import { formatRelative } from 'date-fns';
	import { ru } from 'date-fns/locale';

	export let fetchPosts = () => {};

	export let id = null;
	export let text = '';
	export let date = '1990-01-01';
	export let update = null;

	let isEditing = false;
	let inputValue = '';

	async function handleDelete(id) {
		await deletePost(id);
		fetchPosts();
	}

	function setEditing() {
		isEditing = true;
	}

	async function handleUpdate(id) {
		await updatePost(id, inputValue);
		isEditing = false;
		fetchPosts();
	}
</script>

<div class="container">
	{#if isEditing === false}
		<p class="text">{text}</p>
		<div class="buttons">
			<button on:click={setEditing}>Изменить</button>
			<button
				on:click={() => {
					handleDelete(id);
				}}>Удалить</button
			>
		</div>
	{:else}
		<form
			class="form"
			on:submit|preventDefault={() => {
				handleUpdate(id);
			}}
		>
			<input
				class="text"
				type="text"
				value={text}
				on:input={(event) => (inputValue = event.target.value)}
			/>
			<button type="submit">Сохранить</button>
		</form>
	{/if}
	{#if update === null}
		<div class="date">
			<p>создан</p>
			<p>{formatRelative(new Date(date), new Date(), { locale: ru })}</p>
		</div>
	{:else}
		<div class="date">
			<p>изменен</p>
			<p>{formatRelative(new Date(update), new Date(), { locale: ru })}</p>
		</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgb(226, 226, 226);
		max-width: 600px;
		width: 100%;
		height: 150px;
		padding: 10px;
		margin: 10px;
		border-radius: 10px;
	}
	.text {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90%;
		height: 40px;
		width: 90%;
	}
	.buttons {
		display: flex;
		flex-direction: row;
	}
	.form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}
	.date {
		display: flex;
		flex-direction: row;
		justify-content: center;
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
		width: 100px;
		margin: 10px;
		border-radius: 10px;
		background-color: white;
		border-style: none;
	}
	p {
		margin-right: 3pt;
	}
</style>
