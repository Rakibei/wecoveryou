<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
	let user = data.user;
</script>

<h1 class="text-3xl font-bold mb-6">
	<i class="fa-solid fa-house mr-2"></i>
	Dashboard
</h1>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
	<div class="bg-white rounded-xl shadow p-6">
		<h2 class="font-semibold text-lg mb-2">
			<i class="fa-solid fa-bolt mr-2"></i>
			Quick Actions
		</h2>
		<p class="text-gray-600">
			Access common admin tools.
		</p>
	</div>

	<div class="bg-white rounded-xl shadow p-6">
		<h2 class="font-semibold text-lg mb-2">
			<i class="fa-solid fa-circle-check mr-2"></i>
			System Status
		</h2>
		<p class="text-gray-600">All systems operational.</p>
	</div>

	<div class="bg-white rounded-xl shadow p-6">
		<h2 class="font-semibold text-lg mb-2">
			<i class="fa-solid fa-clock-rotate-left mr-2"></i>
			Recent Activity
		</h2>
		<p class="text-gray-600">Latest admin actions.</p>
	</div>
</div>
