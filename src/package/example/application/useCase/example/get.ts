import { Age } from "src/package/example/domain/value/age";

export type Input = {
    id: string;
};

export type Output = {
    age: Age;
};

export const interactor = (input: Input): Output => {
    const age = Age.create(32);
    return {
        age: age,
    };
};
