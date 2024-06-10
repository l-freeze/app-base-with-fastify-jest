import { DomainError } from "../../../core/error/domainError";

export class TypeError extends DomainError {
    constructor(input: number) {
        super(input.toString());
    }
}

export class MinValueError extends DomainError {
    constructor(input: number) {
        super(input.toString());
    }
}

export class MaxValueError extends DomainError {
    constructor(input: number) {
        super(input.toString());
    }
}
