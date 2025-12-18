import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

let databaseUrl;

if (!env.DEPLOY_ENV) {
    throw new Error('DEPLOY_ENV is not set');
}

if (env.DEPLOY_ENV === 'development') {
    databaseUrl = env.LOCALDATABASE_URL;
} else if (env.DEPLOY_ENV === 'production') {
    databaseUrl = env.REMOTEDATABASE_URL;
}

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set');
}

const client = postgres(databaseUrl);

export const db = drizzle(client, { schema });
