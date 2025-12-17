<script lang="ts">
	export let data;
</script>

<h1>Test DB:</h1>

<table>
	<thead>
		<tr>
			<th>ID</th>
			<th>Username</th>
		</tr>
	</thead>
	<tbody>
		{#each data.user as u}
			<tr>
				<td>{u.id}</td>
				<td>{u.username}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
</style>
