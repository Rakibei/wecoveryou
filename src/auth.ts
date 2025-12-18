import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/sveltekit/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: DrizzleAdapter(db),
	session: {
		strategy: 'database'
	},
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				username: {},
				password: {}
			},
			async authorize(credentials) {
				if (!credentials?.username || !credentials.password) {
					return null;
				}

				const user = await db.query.users.findFirst({
					where: eq(users.username, credentials.username)
				});

				if (!user) return null;

				const valid = await bcrypt.compare(
					credentials.password,
					user.password
				);

				if (!valid) return null;

				return {
					id: user.id,
					name: user.username
				};
			}
		})
	],
	trustHost: true
});
