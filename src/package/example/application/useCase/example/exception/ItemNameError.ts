import { RuntimeError } from "src/package/core/error/runtimeError";

export class MinLengthError extends RuntimeError {
    constructor(input: string) {
        super(input);
    }
}

export class MaxLengthError extends RuntimeError {
    constructor(input: string) {
        super(input);
    }
}
