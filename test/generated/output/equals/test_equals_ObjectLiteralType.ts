import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_equals } from "../../../internal/_test_equals";
export const test_equals_ObjectLiteralType = _test_equals("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: any, _exceptionable: boolean = true): input is {    id: string;    name: string;    age: number;} => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age)) && (3 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["id", "name", "age"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
})(input));
