<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { dndzone } from 'svelte-dnd-action';

	export let data: PageData;

	let tab: 'iphone' | 'ipad' = 'iphone';
	let editing: any = null;
	let adding: 'iphone' | 'ipad' | null = null;
	let iphones = [...data.iphones].sort((a, b) => a.position - b.position);
	let ipads = [...data.ipads].sort((a, b) => a.position - b.position);

	function price(value: string | null) {
		return value === null ? 'N/A' : `${value}`;
	}

	let search = '';

	$: {
		iphones = [...data.iphones].sort((a, b) => a.position - b.position);
		ipads = [...data.ipads].sort((a, b) => a.position - b.position);
	}

	$: filteredIphones = iphones.filter(phone =>
		phone.name.toLowerCase().includes(search.toLowerCase())
	);

	$: filteredIpads = ipads.filter(pad =>
		pad.name.toLowerCase().includes(search.toLowerCase())
	);

	async function handleIphoneReorder(e: any) {
		iphones = e.detail.items;

		const payload = iphones.map((phone, index) => ({
			id: phone.id,
			position: index
		}));

		await fetch('/admin/repairs?type=iphone', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});
		await invalidateAll();
	}

	async function handleIpadReorder(e: any) {
		ipads = e.detail.items;

		const payload = ipads.map((pad, index) => ({
			id: pad.id,
			position: index
		}));

		await fetch('/admin/repairs?type=ipad', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});
		await invalidateAll();
	}
</script>

<h1 class="text-3xl font-bold mb-6">Repair Pricing</h1>

<!-- Tabs -->
<div class="flex gap-4 mb-6">
	<button
		on:click={() => (tab = 'iphone')}
		class="px-4 py-2 rounded-lg"
		class:bg-gray-900={tab === 'iphone'}
		class:text-white={tab === 'iphone'}
	>
		iPhone
	</button>

	<button
		on:click={() => (tab = 'ipad')}
		class="px-4 py-2 rounded-lg"
		class:bg-gray-900={tab === 'ipad'}
		class:text-white={tab === 'ipad'}
	>
		iPad
	</button>
</div>

<!-- Add button -->
<button
	class="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg"
	on:click={() => (adding = tab)}
>
	+ Add {tab === 'iphone' ? 'iPhone' : 'iPad'}
</button>

<input
  type="text"
  placeholder="Search..."
  bind:value={search}
  class="mb-4 w-full border border-gray-400 shadow rounded px-3 py-2"
/>

<!-- Lists -->
{#if tab === 'iphone'}
<ul class="space-y-4"
	use:dndzone={{
		items: filteredIphones,
		flipDurationMs: 150,
		dragDisabled: search.length > 0
	}}
	on:consider={(e) => (iphones = e.detail.items)}
	on:finalize={handleIphoneReorder}>
  {#each filteredIphones as phone (phone.id)}
    <li class="bg-white p-4 rounded-xl shadow-md">
      <div class="flex-1">
		<div class="flex items-center justify-between">
		    <span class="text-lg font-semibold text-gray-800">{phone.name}</span>
			<button
				class="mt-4 md:mt-0 px-5 py-1 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors self-end"
				on:click={() => (editing = { type: 'iphone', item: phone })}
			>Edit</button>
	  	</div>
        <div class="overflow-x-auto mt-3">
          <table class="min-w-full text-sm text-left text-gray-900 border border-gray-200 rounded-lg">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-3 py-2">Screen</th>
                <th class="px-3 py-2">Screen Pro</th>
                <th class="px-3 py-2">Battery</th>
                <th class="px-3 py-2">Back Camera</th>
                <th class="px-3 py-2">Back Camera Glass</th>
                <th class="px-3 py-2">Front Camera</th>
                <th class="px-3 py-2">Backcover w. Frame</th>
                <th class="px-3 py-2">Backcover Glass</th>
                <th class="px-3 py-2">Charge Port</th>
                <th class="px-3 py-2">Speaker</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="px-3 py-2">{price(phone.screenprice)}</td>
                <td class="px-3 py-2">{price(phone.screenproprice)}</td>
                <td class="px-3 py-2">{price(phone.batteryprice)}</td>
                <td class="px-3 py-2">{price(phone.backcameraprice)}</td>
                <td class="px-3 py-2">{price(phone.backcameraglassprice)}</td>
                <td class="px-3 py-2">{price(phone.frontcameraprice)}</td>
                <td class="px-3 py-2">{price(phone.backcoverframeprice)}</td>
                <td class="px-3 py-2">{price(phone.backcoverglassprice)}</td>
                <td class="px-3 py-2">{price(phone.chargeportprice)}</td>
                <td class="px-3 py-2">{price(phone.speakerprice)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </li>
  {/each}
</ul>
{:else}
	<ul class="space-y-4"
	use:dndzone={{
		items: filteredIpads,
		flipDurationMs: 150,
		dragDisabled: search.length > 0
	}}
	on:consider={(e) => (ipads = e.detail.items)}
	on:finalize={handleIpadReorder}>
  {#each filteredIpads as pad (pad.id)}
    <li class="bg-white p-4 rounded-xl shadow-md gap-7">
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold text-gray-800">{pad.name}</span>
          <button
            class="mt-4 md:mt-0 px-5 py-1 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors self-end"
            on:click={() => (editing = { type: 'ipad', item: pad })}
          >Edit</button>
        </div>
        <div class="overflow-x-auto mt-3">
          <table class="min-w-full text-sm text-left text-gray-900 border border-gray-200 rounded-lg">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-3 py-2">Screen</th>
                <th class="px-3 py-2">Battery</th>
                <th class="px-3 py-2">LCD</th>
                <th class="px-3 py-2">Home Button</th>
                <th class="px-3 py-2">Front Camera</th>
                <th class="px-3 py-2">Back Camera</th>
                <th class="px-3 py-2">Charge Port</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="px-3 py-2">{price(pad.screenprice)}</td>
                <td class="px-3 py-2">{price(pad.batteryprice)}</td>
                <td class="px-3 py-2">{price(pad.lcdprice)}</td>
                <td class="px-3 py-2">{price(pad.homebuttonprice)}</td>
                <td class="px-3 py-2">{price(pad.frontcameraprice)}</td>
                <td class="px-3 py-2">{price(pad.backcameraprice)}</td>
                <td class="px-3 py-2">{price(pad.chargeportprice)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </li>
  {/each}
</ul>
{/if}

{#if editing}
	<div class="fixed inset-0 bg-black/50 flex items-center justify-center">
		<form
			method="POST"
			action={`?/update${editing.type === 'iphone' ? 'Iphone' : 'Ipad'}`}
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'success') {
						editing = null; // close modal
						await invalidateAll();
					}
				};
			}}
			class="bg-white p-6 rounded-xl w-full max-w-xl space-y-4"
		>
			<input type="hidden" name="id" value={editing.item.id} />

			<h2 class="text-xl font-bold">
				Edit {editing.item.name}
			</h2>

			{#each Object.entries(editing.item) as [key, value]}
				{#if key.endsWith('price')}
					<label class="block">
						<span class="text-sm capitalize">{key.replace('price', '')}</span>
						<input
							type="number"
							step="1"
							name={key}
							value={value ?? ''}
							class="w-full border rounded px-3 py-2"
						/>
					</label>
				{/if}
			{/each}

			<div class="flex justify-end gap-2">
				<button type="button" on:click={() => (editing = null)}>
					Cancel
				</button>
				<button class="bg-blue-600 text-white px-4 py-2 rounded">
					Save
				</button>
			</div>
		</form>
	</div>
{/if}

{#if adding}
	<div class="fixed inset-0 bg-black/50 flex items-center justify-center">
		<form
			method="POST"
			action={`?/add${adding === 'iphone' ? 'Iphone' : 'Ipad'}`}
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'success') {
						adding = null;
						await invalidateAll();
					}
				};
			}}
			class="bg-white p-6 rounded-xl w-full max-w-xl space-y-4"
		>
			<h2 class="text-xl font-bold">
				Add {adding === 'iphone' ? 'iPhone' : 'iPad'}
			</h2>

			<label class="block">
				<span class="text-sm">Names</span>
				<input
					name="name"
					required
					class="w-full border rounded px-3 py-2"
				/>
			</label>

			{#if adding === 'iphone'}
				{#each [
					'screenprice',
					'screenproprice',
					'batteryprice',
					'backcameraprice',
					'backcameraglassprice',
					'frontcameraprice',
					'backcoverframeprice',
					'backcoverglassprice',
					'chargeportprice',
					'speakerprice'
				] as field}
					<label class="block">
						<span class="text-sm capitalize">{field.replace('price', '')}</span>
						<input
							type="number"
							step="1"
							name={field}
							class="w-full border rounded px-3 py-2"
						/>
					</label>
				{/each}
			{:else}
				{#each [
					'screenprice',
					'batteryprice',
					'lcdprice',
					'homebuttonprice',
					'frontcameraprice',
					'backcameraprice',
					'chargeportprice'
				] as field}
					<label class="block">
						<span class="text-sm capitalize">{field.replace('price', '')}</span>
						<input
							type="number"
							step="1"
							name={field}
							class="w-full border rounded px-3 py-2"
						/>
					</label>
				{/each}
			{/if}

			<div class="flex justify-end gap-2">
				<button type="button" on:click={() => (adding = null)}>
					Cancel
				</button>
				<button class="bg-green-600 text-white px-4 py-2 rounded">
					Add
				</button>
			</div>
		</form>
	</div>
{/if}
