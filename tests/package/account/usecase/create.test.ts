import { describe, expect, test } from "@jest/globals";

import { Data } from "src/package/example/domain/entity/data";

describe("example.domain.dataエンティティのテスト", () => {
    describe("正常系", () => {
        test("nameにテスタ, sexに1, ageに30を渡す", () => {
            //setup

            //execute
            const data = Data.create("テスタ", 1, 30);

            //assert
            expect(data instanceof Data).toBeTruthy();
        });
    });
});

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
