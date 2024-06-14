import type { ItemName } from "./ItemName";
import type { ItemQuantity } from "./ItemQuantity";

export type ItemType = {
    name: ItemName;
    quantity: ItemQuantity;
};

export class Item {
    private constructor(
        readonly name: ItemName,
        readonly quantity: ItemQuantity,
    ) {}

    /**
     */
    static create(input: ItemType): Item {
        return new Item(input.name, input.quantity);
    }
}
