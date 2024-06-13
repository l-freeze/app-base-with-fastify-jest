import { describe, expect, test } from "@jest/globals";

describe("アカウント作成", () => {
    describe("正常値", () => {
        test("サンプル", () => {
            expect(1).toBeTruthy();
        });
    });
    describe("境界値", () => {
        test.skip("skip", () => {
            expect(1).toBe(1);
        });
    });
    describe("異常値", () => {
        test.skip("skip", () => {
            expect(1).toBe(1);
        });
    });
    describe("極端値", () => {
        test.skip("skip", () => {
            expect("example").toBe(1);
        });
    });
});
