export type RepairKey =
	| 'screenprice'
	| 'screenproprice'
	| 'batteryprice'
	| 'backcameraprice'
	| 'backcameraglassprice'
	| 'frontcameraprice'
	| 'backcoverframeprice'
	| 'backcoverglassprice'
	| 'chargeportprice'
	| 'speakerprice'
	| 'lcdprice'
	| 'homebuttonprice';

export function calculateSellPrice(
	device: Record<string, any>,
	selectedRepairs: RepairKey[]
) {
	const base = Number(device.baseprice);
	let totalDeductions = 0;

	const breakdown = selectedRepairs.map((key) => {
		const value = Number(device[key] ?? 0);
		totalDeductions += value;
		return { key, value };
	});

	return {
		base,
		breakdown,
		totalDeductions,
		finalPrice: Math.max(base - totalDeductions, 0)
	};
}
