import { MaxLengthError, MinLengthError } from "src/package/example/application/useCase/example/exception/FreewordError";

type FreewordType = string;

export class Freeword {
    private static LENGTH_MAX = 256;
    private static LENGTH_MIN = 1;

    private constructor(readonly value: FreewordType) {}

    /**
     */
    static create(input: FreewordType): Freeword {
        this.validate(input);
        return new Freeword(input);
    }

    static validate(input: FreewordType): void {
        if (input.length < this.LENGTH_MIN) {
            throw new MinLengthError(input);
        }
        if (input.length > this.LENGTH_MAX) {
            throw new MaxLengthError(input);
        }
    }
}
