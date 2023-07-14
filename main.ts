import { drizzle, migrate, sqljs } from "./deps.ts";
import { users } from "./schema.ts";

const { Database } = await sqljs();
const db = drizzle(new Database());

migrate(db, { migrationsFolder: "./drizzle" });

const result = db.select().from(users).all();

console.log(result);
