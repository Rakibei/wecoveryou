<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/state';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	export let data: LayoutData;
	const user = data.user;

	const navItems = [
		{ label: 'Dashboard', href: '/admin/dashboard', icon: 'fa-solid fa-house' },
		{ label: 'Repairs', href: '/admin/repairs', icon: 'fa-solid fa-screwdriver-wrench' },
		{ label: 'Users', href: '/admin/users', icon: 'fa-solid fa-users' },
		{ label: 'Settings', href: '/admin/settings', icon: 'fa-solid fa-gear' }
	];

	/**
	 * Returns true if the current route matches or is a child of the nav route
	 */
	function isActive(href: string, pathname: string) {
		if (href === '/admin') return pathname === '/admin';
		return pathname.startsWith(href);
	}
</script>

<div class="min-h-screen flex bg-gray-100" style="min-height: calc(100vh - 64px);">
	<!-- Sidebar -->
	<aside class="w-64 bg-gray-900 text-gray-100 flex flex-col">
		<div class="px-6 py-4 text-xl font-bold border-b border-gray-800">
			<i class="fa-solid fa-shield-halved mr-2"></i>
			Admin Panel
		</div>

		<nav class="flex-1 px-4 py-6 space-y-1">
			{#each navItems as item}
				{#if isActive(item.href, page.url.pathname)}
					<a
						href={item.href}
						class="flex items-center gap-3 px-4 py-2 rounded-lg
							bg-gray-800 text-white font-medium"
					>
						<i class={item.icon}></i>
						<span>{item.label}</span>
					</a>
				{:else}
					<a
						href={item.href}
						class="flex items-center gap-3 px-4 py-2 rounded-lg
							text-gray-300 hover:bg-gray-800 hover:text-white
							transition-colors"
					>
						<i class={item.icon}></i>
						<span>{item.label}</span>
					</a>
				{/if}
			{/each}
		</nav>

		<div class="px-6 py-4 border-t border-gray-800 text-sm">
			<div class="text-gray-400">Logged in as</div>
			<div class="font-semibold truncate">
				<i class="fa-solid fa-user mr-1"></i>
				{user.username}
			</div>
		</div>
	</aside>

	<!-- Main content -->
	<main class="flex-1 p-8">
		<slot />
	</main>
</div>
