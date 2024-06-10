type NameType = string;

export class Name {
    private static LENGTH_MAX = 64;
    private static LENGTH_MIN = 1;

    private constructor(readonly value: NameType) {}

    /**
     */
    static create(input: NameType): Name {
        if (!this.validate(input)) {
            //Exception
        }
        return new Name(input);
    }

    static validate(input: NameType): boolean {
        return input.length < this.LENGTH_MIN || this.LENGTH_MAX < input.length;
    }
}
