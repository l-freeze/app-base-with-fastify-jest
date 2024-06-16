import type { Item } from "src/package/example/application/useCase/example/value/Item";

export interface IItemQuery {
    getByFreeword(freeword: string): Array<Item>;
}
