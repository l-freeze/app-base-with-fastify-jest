import { describe, expect, test } from "@jest/globals";
import { Data } from "../../../../../src/package/example/domain/entity/data";

describe("example.domain.dataエンティティのテスト", () => {
    describe("正常系", () => {
        test("nameに文字列、sexにnumberを受け取れる", () => {
            //setup

            //execute
            const data = Data.create("newname", 1, 40);

            //assert
            expect(data instanceof Data).toBeTruthy();
        });
    });
});
