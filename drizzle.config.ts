import { type Config } from "./deps.ts";

export default {
  schema: "./schema.ts",
  out: "./drizzle",
  driver: "libsql",
  dbCredentials: {
    url: "db.sqlite",
  },
} satisfies Config;
