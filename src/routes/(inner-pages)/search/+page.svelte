<script lang="ts">
	export let data;
</script>

<h1>Search results</h1>

{#if data.query}
	<p>Results for: <strong>{data.query}</strong></p>
{/if}

<table>
	<thead>
		<tr>
			<th>ID</th>
			<th>Username</th>
		</tr>
	</thead>
	<tbody>
		{#each data.users as u}
			<tr>
				<td>{u.id}</td>
				<td>{u.username}</td>
			</tr>
		{/each}
	</tbody>
</table>
