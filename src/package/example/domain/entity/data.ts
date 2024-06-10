import { Age } from "../value/age";
import { Name } from "../value/name";
import { Sex } from "../value/sex";

export class Data {
    private constructor(
        private name: Name,
        private sex: Sex,
        private age: Age,
    ) {}

    static create(name: string, sex: number, age: number): Data {
        return new Data(Name.create(name), Sex.create(sex), Age.create(age));
    }
}
