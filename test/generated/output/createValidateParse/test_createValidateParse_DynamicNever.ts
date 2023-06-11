import typia from "../../../../src";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_validateParse } from "../../../internal/_test_validateParse";
export const test_createValidateParse_DynamicNever = _test_validateParse("DynamicNever", DynamicNever.generate, (input: string): typia.IValidation<typia.Primitive<DynamicNever>> => { const validate = (input: any): typia.IValidation<DynamicNever> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    const __is = (input: any): input is DynamicNever => {
        const $join = (typia.createValidateParse as any).join;
        const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return null !== value && undefined === value;
            return true;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DynamicNever => {
            const $join = (typia.createValidateParse as any).join;
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    if (RegExp(/(.*)/).test(key))
                        return (null !== value || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value
                        })) && (undefined === value || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value
                        }));
                    return true;
                }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "DynamicNever",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "DynamicNever",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; input = JSON.parse(input); const output = validate(input); return output as any; }, DynamicNever.SPOILERS);
