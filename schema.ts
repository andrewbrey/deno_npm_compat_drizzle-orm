import { integer, sqliteTable, text } from "./deps.ts";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name"),
});
