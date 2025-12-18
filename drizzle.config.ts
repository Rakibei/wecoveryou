import { defineConfig } from 'drizzle-kit';

let databaseUrl;

if (!process.env.DEPLOY_ENV) {
	throw new Error('DEPLOY_ENV is not set');
}

if (process.env.DEPLOY_ENV === 'development') {
	databaseUrl = process.env.LOCALDATABASE_URL;
} else if (process.env.DEPLOY_ENV === 'production') {
	databaseUrl = process.env.REMOTEDATABASE_URL;
}

if (!databaseUrl) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: { url: databaseUrl },
	verbose: true,
	strict: true
});
