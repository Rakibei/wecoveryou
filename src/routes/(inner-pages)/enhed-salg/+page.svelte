<script lang="ts">
	import { REPAIR_FIELDS, type RepairKey } from '$lib/calc/repairs';
	import { calculateLivePrice } from '$lib/calc/client';
	import { isValidPrice } from '$lib/calc/isValidPrice';

	export let data;

    type RepairDevice = {
		baseprice: string;
	} & Partial<Record<RepairKey, string | null>>;

	let type: 'iphone' | 'ipad' = 'iphone';
	let selectedModelName = '';
	let selectedRepairs = new Set<RepairKey>();
    let device: RepairDevice | undefined;

    const repairKeys = Object.keys(REPAIR_FIELDS) as RepairKey[];

	$: models = type === 'iphone' ? data.iphones : data.ipads;
	$: device = models.find((d) => d.name === selectedModelName);

    $: if (device) {
        selectedRepairs = new Set();
    }

	$: finalPrice = device
		? calculateLivePrice(device, selectedRepairs)
		: 0;

	function toggleRepair(key: RepairKey) {
	const next = new Set(selectedRepairs);

	next.has(key)
		? next.delete(key)
		: next.add(key);

	selectedRepairs = next;
}
</script>

<div class="max-w-xl mx-auto space-y-6">
	<!-- Device Type -->
	<select bind:value={type} class="w-full border rounded p-2">
		<option value="iphone">iPhone</option>
		<option value="ipad">iPad</option>
	</select>

	<!-- Model -->
	<select
		bind:value={selectedModelName}
		class="w-full border rounded p-2"
	>
		<option value="">Select model</option>
		{#each models as m}
			<option value={m.name}>{m.name}</option>
		{/each}
	</select>

        {#if device}
            <div class="space-y-2">
                {#each repairKeys as key}
                    {#if device[key] !== null}
                        <label class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={selectedRepairs.has(key)}
                                on:change={() => toggleRepair(key)}
                            />
                            <span>{REPAIR_FIELDS[key]}</span>
                            <span class="ml-auto text-sm text-gray-500">
                                −€{device[key]}
                            </span>
                        </label>
                    {/if}
			{/each}
		</div>

		<!-- Result -->
		<div class="mt-6 p-4 border rounded">
			<p class="text-sm text-gray-600">Estimated payout</p>
			<p class="text-3xl font-bold">€{finalPrice}</p>
		</div>
	{/if}
</div>
