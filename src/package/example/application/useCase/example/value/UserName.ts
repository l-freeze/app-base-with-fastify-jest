export type UserNameType = string;

export class UserName {
    private constructor(readonly value: UserNameType) {}

    /**
     */
    static create(input: UserNameType): UserName {
        return new UserName(input);
    }
}
