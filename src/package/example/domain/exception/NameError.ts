import { DomainError } from "src/package/core/error/domainError";

export class TypeError extends DomainError {
    constructor(input: string) {
        super(input.toString());
    }
}

export class MinLengthError extends DomainError {
    constructor(input: string) {
        super(input.toString());
    }
}

export class MaxLengthError extends DomainError {
    constructor(input: string) {
        super(input.toString());
    }
}
