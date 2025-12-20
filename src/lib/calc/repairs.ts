export const REPAIR_FIELDS = {
	screenprice: 'Broken Screen',
	screenproprice: 'Broken Pro Screen',
	batteryprice: 'Bad Battery',
	lcdprice: 'LCD Issue',
	homebuttonprice: 'Home Button Issue',
	frontcameraprice: 'Front Camera Issue',
	backcameraprice: 'Back Camera Issue',
	backcameraglassprice: 'Back Camera Glass Issue',
	backcoverframeprice: 'Back Frame Damage',
	backcoverglassprice: 'Back Glass Damage',
	chargeportprice: 'Charging Port Issue',
	speakerprice: 'Speaker Issue'
} as const;

export type RepairKey = keyof typeof REPAIR_FIELDS;
