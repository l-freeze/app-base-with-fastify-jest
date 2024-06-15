type SexType = number;

export class Sex {
    private static MALE = 1;
    private static FEMALE = 2;

    private constructor(readonly value: SexType) {}

    static create(input: SexType) {
        if (!Sex.validate(input)) {
            //Exception
        }
        return new Sex(input);
    }

    static validate(input: SexType): boolean {
        const allowedValues = [Sex.MALE, Sex.FEMALE];
        return allowedValues.includes(input);
    }
}
