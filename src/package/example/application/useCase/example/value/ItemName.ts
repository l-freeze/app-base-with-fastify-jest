import { MaxLengthError, MinLengthError } from "src/package/example/application/useCase/example/exception/ItemNameError";

type ItemNameType = string;

export class ItemName {
    private static LENGTH_MAX = 256;
    private static LENGTH_MIN = 1;

    private constructor(readonly value: ItemNameType) {}

    /**
     */
    static create(input: ItemNameType): ItemName {
        if (!ItemName.validate(input)) {
            //Exception
        }
        return new ItemName(input);
    }

    static validate(input: ItemNameType): boolean {
        if (input.length < ItemName.LENGTH_MIN) {
            throw new MinLengthError(input);
        }
        if (input.length > ItemName.LENGTH_MAX) {
            throw new MaxLengthError(input);
        }
        return true;
    }
}
