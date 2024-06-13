/**
 * @summary 基底のエラー
 * @description
 * 全てのエラーは本エラーを拡張したものを使用する
 * RangeErrorやTypeErrorなど、組み込みのエラーは使わない
 *
 */
export abstract class RootError extends Error {
    constructor(message = "", code: number = Number.MAX_SAFE_INTEGER) {
        super(message);
    }
}
