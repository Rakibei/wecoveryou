import type { RepairKey } from './repairs';

export function calculateLivePrice(
	device: Record<string, any>,
	selected: Set<RepairKey>
) {
	const base = Number(device.baseprice);
	let deductions = 0;

	for (const key of selected) {
		deductions += Number(device[key] ?? 0);
	}

	return Math.max(base - deductions, 0);
}
