import type { IUserQuery } from "src/package/example/application/useCase/example/query/IUserQuery";
import { User } from "../../../../../application/useCase/example/value/User";

import * as schema from "db/schema";
import { defineConfig } from "drizzle-kit";
import { drizzle } from "drizzle-orm/mysql2";
import * as mysql2 from "mysql2";
import { UserName } from "../../../../../application/useCase/example/value/UserName";
//import { UserName } from "src/package/example/application/useCase/example/value/UserName";

//import mysql from "mysql2/promise";

export class UserQuery implements IUserQuery {
    constructor() {}

    getByFreeword(freeword: string): Array<User> {
        const user = User.create({ name: UserName.create("お名前") });
        return [user];
        /**
         * DBコネクションはプールで作ってDIにする
         */
        // mysql2.createConnection(defineConfig());
        // const db = drizzle(client, { schema });
        // const connection = await mysql.createConnection({
        //     host: "host",
        //     user: "user",
        //     database: "database",
        //     ...
        // });
        // const db = drizzle(connection);
        // await db.select()
    }
}
