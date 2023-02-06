<script>
	import { formatRelative } from 'date-fns';
	import { ru } from 'date-fns/locale';
	export let text = '';
	export let date = '1990-01-01';
	export let handleDelete = () => {
		console.log('default del');
	};
	export let handleUpdate = () => {
		console.log('default upd');
	};
</script>

<div class="container">
	<p>{text}</p>
	<p>{formatRelative(new Date(date), new Date(), { locale: ru })}</p>
	<button on:click={handleUpdate}>UPDATE</button>
	<button on:click={handleDelete}>DELETE</button>
</div>

<style>
	.container {
		background-color: gray;
		padding: 10px;
	}
</style>
