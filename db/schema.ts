import { bigint, index, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable(
    "users",
    {
        id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
        fullName: varchar("full_name", { length: 256 }),
    },
    (users) => ({
        nameIdx: index("name_idx").on(users.fullName),
    }),
);

export const authOtps = mysqlTable("auth_otp", {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    phone: varchar("phone", { length: 256 }),
    userId: bigint("user_id", { mode: "number" }).references(() => users.id),
});
