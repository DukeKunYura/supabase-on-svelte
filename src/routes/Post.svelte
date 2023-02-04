<script>
	export let text = '';
	export let handleDelete = () => {
		console.log('default del');
	};
	export let handleUpdate = () => {
		console.log('default upd');
	};
</script>

<div class="container">
	<p>{text}</p>
	<button on:click={handleUpdate}>UPDATE</button>
	<button on:click={handleDelete}>DELETE</button>
</div>

<style>
	.container {
		background-color: gray;
		padding: 10px;
	}
</style>
