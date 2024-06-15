import { RuntimeError } from "../../../core/error/runtimeError";
import { MaxValueError, MinValueError, TypeError } from "../exception/AgeError";

type AgeType = number;

export class Age {
    private static MIN = 18;
    private static MAX = 100;

    private constructor(readonly value: AgeType) {}

    static create(input: number): Age {
        Age.validate(input);
        return new Age(Math.floor(input));
    }

    static validate(input: number): true {
        if (!Number.isSafeInteger(input)) {
            throw new TypeError(input);
        }
        if (input < Age.MIN) {
            throw new MinValueError(input);
        }
        if (input > Age.MAX) {
            throw new MaxValueError(input);
        }
        return true;
    }
}
