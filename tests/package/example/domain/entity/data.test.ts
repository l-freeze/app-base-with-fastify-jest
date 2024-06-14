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
    describe("異常系", () => {
        test("nameにテスタ, sexに1, ageに10を渡す", () => {
            //setup

            //execute
            const data = () => Data.create("テスタ", 1, 10);

            //assert
            expect(data).toThrow();
        });
    });
});
