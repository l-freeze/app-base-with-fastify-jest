import { type Input, type Output, interactor } from "../../../application/useCase/example/get";
//import { type Input, type Output, interactor } from "src/package/example/application/useCase/example/get";
import { Age } from "../../../domain/value/age";

export const dbExampleGetController = (input: any): Output => {
    console.log(input.name);
    //export const dbExampleGetController = (): Output => {
    //return { name: "sjkjfd;lksajfkldajslkjs", age: Age.create(32) } as Output;
    return interactor({
        id: "aaa",
        name: input.name, //"太郎くん", //todo
    } as Input);
};
