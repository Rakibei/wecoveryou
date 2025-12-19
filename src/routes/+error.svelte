<script lang="ts">
	import { page } from '$app/state';

	let h1error: string;
	let h2error: string;
	let linkerror: string;

	switch (page.status) {
		case 404:
			// Handle 404 error
			h1error = 'Siden blev ikke fundet';
			h2error = 'Denne side kunne ikke findes.';
			linkerror = 'Prøv eventuelt at finde den fra Forsiden';
			break;
		default:
			// Handle other errors
			h1error = 'Der opstod en fejl';
			h2error = 'Der opstod en uventet fejl på serveren.';
			linkerror = 'Prøv eventuelt at gå tilbage til Forsiden';
			break;
	}
</script>

<div class="mt-5">
	<div class="mx-50 my-12.5 flex flex-col items-start justify-center rounded bg-white p-5">
		<div class="flex flex-col items-start">
			<div class="mb-5 text-2xl font-bold">
				<h1>{h1error}</h1>
			</div>
			<div class="mb-5 text-sm font-normal">
				<h1>{h2error}</h1>
				<a href="/">{linkerror}</a>
			</div>
		</div>
	</div>
</div>
