<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<div class="mt-5">
	<div class="mx-50 my-12.5 flex flex-col items-start justify-center rounded bg-white p-5">
		<div class="flex flex-col items-start">
			<div class="mb-5 text-sm font-bold">
				<h1>Denne side kræver brugerlogin</h1>
			</div>
			<div class="mb-5 text-sm font-normal">
				<h1>Indtast venligst brugerinformationer herunder</h1>
			</div>
		</div>

		<div class="w-1/4">
			<form method="POST" action="?/login" use:enhance class="flex flex-col">
				<label for="username" class="text-sm"> Brugernavn </label>
				<input type="text" id="username" name="username" required class="mb-4 rounded border border-gray-300 py-0" />

				<label for="password" class="text-sm"> Kodeord </label>
				<input
					type="password"
					id="password"
					name="password"
					required
					class="mb-4 rounded border border-gray-300 py-0"
				/>

				<div class="mb-2 flex items-center justify-between">
					<div class="flex items-center gap-2">
						<input type="checkbox" id="remember" name="remember" value="on" />
						<label for="remember" class="text-sm"> Husk Login </label>
					</div>

					<a href="/forgot-password" class="text-xs text-blue-600 hover:underline"> Glemt Kodeord? </a>
				</div>

				{#if form?.error}
					<p class="mb-1 text-sm text-red-600">
						{form.error}
					</p>
				{/if}

				<button type="submit" class="w-1/4 rounded bg-blue-600 px-2 py-1 text-white transition hover:bg-blue-700">
					Login
				</button>
			</form>
		</div>
	</div>
</div>
