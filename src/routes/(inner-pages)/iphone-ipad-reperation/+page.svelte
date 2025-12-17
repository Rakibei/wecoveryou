<script lang="ts">
	export let data;

	let search = '';
	type Filter = 'all' | 'iphone' | 'ipad';
	let activeFilter: Filter = 'all';

	function price(value: string | null) {
		return value === null ? 'Ikke tilgængelig' : `${value} kr.`;
	}

	function unavailable(value: string | null) {
		return value === null;
	}

	// Normalized search (reactive!)
	$: normalizedSearch = search.trim().toLowerCase();

	// Reactive filtered lists
	$: filteredIphones =
		activeFilter === 'ipad' ? [] : data.iphonerepairs.filter((p) => p.name.toLowerCase().includes(normalizedSearch));

	$: filteredIpads =
		activeFilter === 'iphone' ? [] : data.ipadrepairs.filter((p) => p.name.toLowerCase().includes(normalizedSearch));
</script>

<div class="mx-auto mt-8 max-w-7xl rounded-lg bg-white p-5 shadow-md">
	<div>
		<h1 class="title">iPhone & iPad Reparation - Hurtigt & Professionelt</h1>
		<p class="subtitle">
			Hos Labtech tilbyder vi <strong>hurtige og pålidelige reparationer</strong> af iPhone og iPad - ofte på under én time.
			Vi bruger kun kvalitetsreservedele, og med 17 butikker i Danmark er vi altid i nærheden.
		</p>
	</div>
	<div class="mb-5 flex items-center gap-4 px-10">
		<div class="grow">
			<input
				type="text"
				placeholder="Søg efter model..."
				class="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
				bind:value={search}
			/>
		</div>
		<div class="flex space-x-1">
			<div>
				<button
					class="rounded-full px-4 py-2 text-sm transition hover:bg-gray-100"
					class:active={activeFilter === 'all'}
					on:click={() => (activeFilter = 'all')}>Alle</button
				>
			</div>
			<div>
				<button
					class="rounded-full px-4 py-2 text-sm transition hover:bg-gray-100"
					class:active={activeFilter === 'iphone'}
					on:click={() => (activeFilter = 'iphone')}>Kun iPhone</button
				>
			</div>
			<div>
				<button
					class="rounded-full px-4 py-2 text-sm transition hover:bg-gray-100"
					class:active={activeFilter === 'ipad'}
					on:click={() => (activeFilter = 'ipad')}>Kun iPad</button
				>
			</div>
		</div>
	</div>
	<div>
		{#if filteredIphones.length > 0}
			<div id="iphoneSection">
				<div>
					<h1 class="title">iPhone Reparation Priser</h1>
				</div>
				<div class="grid grid-cols-1 gap-5 px-8 sm:grid-cols-2 lg:grid-cols-4">
					{#each filteredIphones as p}
						<div class="overflow-hidden rounded-lg border border-gray-200 bg-white text-sm">
							<div
								class="rounded-t-lg bg-linear-to-b from-blue-400 to-blue-600 py-1 text-center text-lg font-bold text-white"
							>
								<h2>{p.name}</h2>
							</div>
							<div class="price-list">
								<div class:unavailable={unavailable(p.screenprice)}>
									<span>Skærm</span><span>{price(p.screenprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.screenproprice)}>
									<span>Skærm Pro</span><span>{price(p.screenproprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.batteryprice)}>
									<span>Batteri</span><span>{price(p.batteryprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.backcameraprice)}>
									<span>Bagkamera</span><span>{price(p.backcameraprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.backcameraglassprice)}>
									<span>Bagkamera Glas</span><span>{price(p.backcameraglassprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.frontcameraprice)}>
									<span>Frontkamera</span><span>{price(p.frontcameraprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.backcoverframeprice)}>
									<span>Bagside m. Ramme</span><span>{price(p.backcoverframeprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.backcoverglassprice)}>
									<span>Bagside Glas</span><span>{price(p.backcoverglassprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.chargeportprice)}>
									<span>Ladeport</span><span>{price(p.chargeportprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.speakerprice)}>
									<span>Højttaler</span><span>{price(p.speakerprice)}</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
		{#if filteredIpads.length > 0}
			<div id="ipadSection">
				<div>
					<h1 class="title">iPad Reparation Priser</h1>
				</div>
				<div class="grid grid-cols-1 gap-5 px-8 sm:grid-cols-2 lg:grid-cols-3">
					{#each filteredIpads as p}
						<div class="overflow-hidden rounded-lg border border-gray-200 bg-white text-sm">
							<div
								class="rounded-t-lg bg-linear-to-b from-emerald-500 to-emerald-600 py-1 text-center text-lg font-bold text-white"
							>
								{p.name}
							</div>
							<div class="price-list">
								<div class:unavailable={unavailable(p.screenprice)}>
									<span>Skærm</span><span>{price(p.screenprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.batteryprice)}>
									<span>Batteri</span><span>{price(p.batteryprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.lcdprice)}>
									<span>LCD</span><span>{price(p.lcdprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.homebuttonprice)}>
									<span>Homeknap</span><span>{price(p.homebuttonprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.frontcameraprice)}>
									<span>Frontkamera</span><span>{price(p.frontcameraprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.backcameraprice)}>
									<span>Bagkamera</span><span>{price(p.backcameraprice)}</span>
								</div>
								<div class:unavailable={unavailable(p.chargeportprice)}>
									<span>Ladeport</span><span>{price(p.chargeportprice)}</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if filteredIphones.length === 0 && filteredIpads.length === 0}
			<div class="no-results">Ingen enheder matcher din søgning</div>
		{/if}
	</div>
</div>

<style>
	.active {
		background-color: #0078d4;
		color: white;
	}

	.title {
		text-align: center;
		margin: 20px 0 10px 0;
		font-size: 1.5em;
		font-weight: 600;
	}

	.subtitle {
		text-align: center;
		margin: 0 15px 20px 15px;
		font-size: 12px;
	}

	.no-results {
		text-align: center;
		margin: 40px 0;
		font-size: 14px;
		color: #74787e;
		font-style: italic;
	}

	.price-list div {
		display: flex;
		justify-content: space-between;
		padding: 3px 10px 3px 10px;
		border-bottom: 1px solid #eee;
	}

	.price-list div:last-child {
		border-bottom: none;
	}

	.unavailable {
		color: #999;
		opacity: 0.6;
	}

	.unavailable span:last-child {
		font-style: italic;
	}
</style>
