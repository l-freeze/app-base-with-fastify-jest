export abstract class RootError extends Error {
    constructor(message = "", code: number = Number.MAX_SAFE_INTEGER) {
        super(message);
    }
}
