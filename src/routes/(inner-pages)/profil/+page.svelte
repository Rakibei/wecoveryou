<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let user = data.user;
</script>

<div class="min-h-screen bg-gray-50 py-10">
	<div class="mx-auto max-w-4xl px-4">
		<!-- Header -->
		<div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 class="text-3xl font-bold text-gray-900">
					Velkommen, {user.username}
				</h1>
			</div>

			<form method="post" action="?/logout" use:enhance>
				<button
					type="submit"
					class="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
				>
					Log ud
				</button>
			</form>
		</div>

		<!-- Profile Card -->
		<div class="overflow-hidden rounded-2xl bg-white shadow">
			<div class="border-b border-gray-200 bg-gray-100 px-6 py-4">
				<h2 class="text-lg font-semibold text-gray-800">Profiloplysninger</h2>
			</div>

			<div class="grid grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2">
				<!-- Username -->
				<div>
					<p class="text-sm font-medium text-gray-500">Brugernavn</p>
					<p class="text-base text-gray-900">{user.username}</p>
				</div>

				<!-- Email -->
				<div>
					<p class="text-sm font-medium text-gray-500">Email</p>
					<p class="text-base text-gray-900">
						{user.email ?? 'Ikke angivet'}
					</p>
				</div>

				<!-- Full name -->
				<div>
					<p class="text-sm font-medium text-gray-500">Fulde navn</p>
					<p class="text-base text-gray-900">
						{user.fullname ?? 'Ikke angivet'}
					</p>
				</div>

				<!-- Phone -->
				<div>
					<p class="text-sm font-medium text-gray-500">Telefon</p>
					<p class="text-base text-gray-900">
						{user.phone ?? 'Ikke angivet'}
					</p>
				</div>

				<!-- Address -->
				<div class="sm:col-span-2">
					<p class="text-sm font-medium text-gray-500">Adresse</p>
					<p class="text-base text-gray-900">
						{user.address ?? 'Ikke angivet'}
					</p>
				</div>
			</div>
		</div>

		<!-- Admin section -->
		{#if user.role === 'admin'}
			<div class="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
				<h3 class="text-lg font-semibold text-yellow-800">Administrator</h3>
				<a
					href="/admin/dashboard"
					class="mt-4 inline-block rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700"
				>
					Gå til Dashboard
				</a>
			</div>
		{/if}
	</div>
</div>
