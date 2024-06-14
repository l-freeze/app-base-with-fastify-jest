import { OverQuantityError, ZeroQuantityError } from "src/package/example/application/useCase/example/exception/ItemQuantityError";

type ItemQuantityType = number;

export class ItemQuantity {
    private static LENGTH_MAX = 256;
    private static LENGTH_MIN = 1;

    private constructor(readonly value: ItemQuantityType) {}

    /**
     */
    static create(input: ItemQuantityType): ItemQuantity {
        if (!this.validate(input)) {
            //Exception
        }
        return new ItemQuantity(input);
    }

    static validate(input: ItemQuantityType): boolean {
        if (input < this.LENGTH_MIN) {
            throw new ZeroQuantityError(input);
        }
        if (input > this.LENGTH_MAX) {
            throw new OverQuantityError(input);
        }
        return true;
    }
}
