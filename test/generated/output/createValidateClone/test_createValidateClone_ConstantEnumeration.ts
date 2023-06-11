import typia from "../../../../src";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_validateClone } from "../../../internal/_test_validateClone";
export const test_createValidateClone_ConstantEnumeration = _test_validateClone("ConstantEnumeration", ConstantEnumeration.generate, (input: any): typia.IValidation<typia.Primitive<ConstantEnumeration>> => { const validate = (input: any): typia.IValidation<ConstantEnumeration> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    const __is = (input: any): input is ConstantEnumeration => {
        return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ConstantEnumeration => {
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "ConstantEnumeration",
                value: input
            })) && input.map((elem: any, _index1: number) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "ConstantEnumeration",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: ConstantEnumeration): typia.Primitive<ConstantEnumeration> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ConstantEnumeration.SPOILERS);
