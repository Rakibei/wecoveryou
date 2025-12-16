<script lang="ts">
	export let data;
</script>

<h1>Test DB:</h1>

<table>
	<thead>
		<tr>
			<th>ID</th>
			<th>Age</th>
		</tr>
	</thead>
	<tbody>
	{#each data.users as u}
		<tr>
			<td>{u.id}</td>
			<td>{u.age}</td>
		</tr>
	{/each}
	</tbody>
</table>

<style>

</style>