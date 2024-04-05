import databaseInstance from './index';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

async function runDatabaseMigrations() {
  console.log('Running your migrations...');
  await migrate(databaseInstance, { migrationsFolder: 'migrations' });
  console.log('Wahoo! Migrations completed!');
  process.exit(0);
}

runDatabaseMigrations().catch((migrationError) => {
  console.error(migrationError);
  process.exit(1);
});
