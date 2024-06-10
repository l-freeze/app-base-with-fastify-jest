import { RootError } from "./rootError";

export class DomainError extends RootError {
    constructor(message = "", code: number = Number.MAX_SAFE_INTEGER) {
        super(message);
    }
}
