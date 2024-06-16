import type { UserName } from "./UserName";

export type UserType = {
    name: UserName;
};

export class User {
    private constructor(readonly name: UserName) {}

    /**
     */
    static create(input: UserType): User {
        return new User(input.name);
    }
}
