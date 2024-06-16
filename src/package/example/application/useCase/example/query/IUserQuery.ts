import type { User } from "src/package/example/application/useCase/example/value/User";

export interface IUserQuery {
    getByFreeword(freeword: string): Array<User>;
}
