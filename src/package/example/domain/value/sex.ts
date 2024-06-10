type SexType = number;

export class Sex {
    private static MALE = 1;
    private static FEMALE = 2;

    private constructor(readonly value: SexType) {}

    static create(input: SexType) {
        if (!this.validate(input)) {
            //Exception
        }
        return new Sex(input);
    }

    static validate(input: SexType): boolean {
        const allowedValues = [this.MALE, this.FEMALE];
        return allowedValues.includes(input);
    }
}
