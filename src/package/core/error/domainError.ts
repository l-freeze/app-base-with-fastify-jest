import { RootError } from "./rootError";

/**
 * @summary ビジネスエラーの基底
 */
export class DomainError extends RootError {
    constructor(message = "", code: number = Number.MAX_SAFE_INTEGER) {
        super(message);
    }
}
