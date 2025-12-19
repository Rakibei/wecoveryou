import { getRequestEvent } from '$app/server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const user = fetchUser();
	return { user };
};

function fetchUser() {
	const { locals } = getRequestEvent();

	return locals.user;
}
