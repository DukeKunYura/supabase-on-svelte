<script>
	// @ts-nocheck

	import { deletePost, updatePost } from '../lib/supabaseActions';
	import { formatRelative } from 'date-fns';
	import { ru } from 'date-fns/locale';

	export let id = null;
	export let text = '';
	export let date = '1990-01-01';
	export let update = null;

	let isEditing = false;
	let inputValue = '';

	function handleDelete(id) {
		deletePost(id);
	}

	function setEditing() {
		isEditing = true;
	}

	function handleUpdate(id) {
		updatePost(id, inputValue);
		isEditing = false;
	}
</script>

<div class="container">
	{#if isEditing === false}
		<p>{text}</p>
		<button on:click={setEditing}>UPDATE</button>
		<button
			on:click={() => {
				handleDelete(id);
			}}>DELETE</button
		>
	{:else}
		<div>
			<form
				class="form"
				on:submit|preventDefault={() => {
					handleUpdate(id);
				}}
			>
				<input type="text" value={text} on:input={(event) => (inputValue = event.target.value)} />
				<button type="submit">Отправить</button>
			</form>
		</div>
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
		background-color: gray;
		padding: 10px;
		margin: 10px;
	}
	.form {
		display: flex;
		flex-direction: column;
	}
	.date {
		display: flex;
		flex-direction: row;
	}
	button {
		width: 100px;
	}
	p {
		margin-right: 3pt;
	}
</style>
