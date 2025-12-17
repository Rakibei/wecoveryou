<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<h1>Opret bruger</h1>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<form method="POST" use:enhance>
	<label for="username">Brugernavn</label>
	<input id="username" name="username" required />

	<label for="email">Email</label>
	<input id="email" name="email" type="email" required />

	<label for="password">Kodeord</label>
	<input id="password" name="password" type="password" required minlength="8" />

	<label for="confirm">Gentag kodeord</label>
	<input id="confirm" name="confirm" type="password" required />

	<button type="submit">Opret konto</button>
</form>

<style>
	.error {
		color: red;
		margin-bottom: 1rem;
	}
</style>
