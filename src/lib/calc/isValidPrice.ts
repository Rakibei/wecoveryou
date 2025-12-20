export function isValidPrice(value: unknown): value is string | number {
	if (value === null || value === undefined) return false;
	if (value === '') return false;

	const num = Number(value);
	return !Number.isNaN(num) && num > 0;
}