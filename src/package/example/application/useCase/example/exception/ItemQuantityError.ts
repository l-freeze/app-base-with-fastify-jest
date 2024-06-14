import { RuntimeError } from "src/package/core/error/runtimeError";

/**
 * 数量が0
 */
export class ZeroQuantityError extends RuntimeError {
    constructor(input: number) {
        super(input.toString());
    }
}

/**
 * @summary 数量が上限を超えている
 */
export class OverQuantityError extends RuntimeError {
    constructor(input: number) {
        super(input.toString());
    }
}
