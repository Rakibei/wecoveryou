<script lang="ts">
	export let data;
</script>

<h1>Test DB</h1>

<ul>
	{#each data.users as u}
		<li>User #{u.id} — age {u.age}</li>
	{/each}
</ul>
