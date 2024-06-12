import { RootError } from "./rootError";

/**
 * @summary 実行時エラーの基底
 */
export class RuntimeError extends RootError {
    constructor(message = "", code: number = Number.MAX_SAFE_INTEGER) {
        super(message);
    }
}
