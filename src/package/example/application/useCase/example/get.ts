//import { Age } from "src/package/example/domain/value/age";
//import * as  UserQuery from "./query/IUserQuery";
//import { UserQuery } from "src/package/example/interfaceAdapter/infrastructure/example/example/query/UserQuery";
import { Age } from "../../../domain/value/age";
import { UserQuery } from "../../../interfaceAdapter/infrastructure/example/example/query/UserQuery";
import type { Freeword } from "./value/Freeword";
import { User } from "./value/User";

export type Input = {
    id: string;
    name: string;
};

export type Output = {
    age?: Age;
    name: string;
};

/**
 * DIにする
 * @param input
 */
export const interactor = (input: Input): Output => {
    const age = Age.create(32);
    const users = new UserQuery().getByFreeword(input.name); //new UserQuery().getByFreeword(input.name);

    return {
        age: age,
        name: users[0].name.value,
    } as Output;
};
