import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '../../constants';

// for query purposes
const client = postgres(DATABASE_URL);
const databaseInstance = drizzle(client);

export default databaseInstance;
