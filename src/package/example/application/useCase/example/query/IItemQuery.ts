import type { Item } from "src/package/example/application/useCase/example/value/Item";

type IItemQuery = {
    getByFreeword(freeword: string): Array<Item>;
};
