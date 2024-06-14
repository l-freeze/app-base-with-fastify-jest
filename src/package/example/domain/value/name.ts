import { MaxLengthError, MinLengthError } from "src/package/example/domain/exception/NameError";

type NameType = string;

export class Name {
    private static LENGTH_MAX = 64;
    private static LENGTH_MIN = 1;

    private constructor(readonly value: NameType) {}

    /**
     */
    static create(input: NameType): Name {
        this.validate(input);
        return new Name(input);
    }

    static validate(input: NameType): boolean {
        if (input.length < this.LENGTH_MIN) {
            throw new MinLengthError(input);
        }
        if (input.length > this.LENGTH_MAX) {
            throw new MaxLengthError(input);
        }
        return true;
    }
}
