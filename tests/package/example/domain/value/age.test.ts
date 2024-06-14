import { describe, expect, test } from "@jest/globals";
import { MaxValueError, MinValueError, TypeError } from "src/package/example/domain/exception/AgeError";
import { Age } from "src/package/example/domain/value/age";

describe("example.domain.ageのテスト", () => {
    describe("正常値", () => {
        test("inputが40の時ageを作れる", () => {
            //setup

            //execute
            const age = Age.create(40);

            //assert
            expect(age).toBeInstanceOf(Age);
            expect(age.value).toBe(40);
        });
    });
    describe("境界値", () => {
        test("inputが17の時ageを作れずエラー", () => {
            expect(() => Age.create(17)).toThrow();
            expect(() => Age.create(17)).toThrow(MinValueError);
        });
        test("inputが101の時ageを作れずエラー", () => {
            expect(() => Age.create(101)).toThrow();
            expect(() => Age.create(101)).toThrowError(MaxValueError);
        });
        test("inputが18の時ageを作れる", () => {
            expect(Age.create(18)).toBeInstanceOf(Age);
        });
        test("inputが100の時ageを作れる", () => {
            expect(Age.create(100)).toBeInstanceOf(Age);
        });
    });
    describe("異常値", () => {
        test(`inputが浮動小数点`, () => {
            expect(() => Age.create(25.6)).toThrow(TypeError);
        });
        test.skip(`inputが文字列`, () => {
            //引数の型エラーになるので問題ない
        });
    });
    describe("極端値", () => {
        test(`inputが${Number.MAX_SAFE_INTEGER}の時MinValueError`, () => {
            expect(() => Age.create(Number.MAX_SAFE_INTEGER)).toThrow();
            expect(() => Age.create(Number.MAX_SAFE_INTEGER)).toThrow(MaxValueError);
        });
        test(`inputが${Number.MIN_SAFE_INTEGER}の時MinValueError`, () => {
            expect(() => Age.create(Number.MAX_SAFE_INTEGER)).toThrow();
            expect(() => Age.create(Number.MAX_SAFE_INTEGER)).toThrow(MaxValueError);
        });
    });
});
