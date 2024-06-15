import { MaxLengthError, MinLengthError } from "src/package/example/application/useCase/example/exception/FreewordError";

type FreewordType = string;

export class Freeword {
    private static LENGTH_MAX = 256;
    private static LENGTH_MIN = 1;

    private constructor(readonly value: FreewordType) {}

    /**
     */
    static create(input: FreewordType): Freeword {
        Freeword.validate(input);
        return new Freeword(input);
    }

    static validate(input: FreewordType): void {
        if (input.length < Freeword.LENGTH_MIN) {
            throw new MinLengthError(input);
        }
        if (input.length > Freeword.LENGTH_MAX) {
            throw new MaxLengthError(input);
        }
    }
}
