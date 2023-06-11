import typia from "../../../../src";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_validateClone } from "../../../internal/_test_validateClone";
export const test_validateClone_ObjectAlias = _test_validateClone("ObjectAlias", ObjectAlias.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<Array<ObjectAlias.IMember>>> => { const validate = (input: any): typia.IValidation<Array<ObjectAlias.IMember>> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    const __is = (input: any): input is Array<ObjectAlias.IMember> => {
        const $io0 = (input: any): boolean => (null === input.id || "string" === typeof input.id) && "string" === typeof input.email && "string" === typeof input.name && (null === input.sex || 1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex) && (null === input.age || "number" === typeof input.age && Number.isFinite(input.age)) && (null === input.dead || "boolean" === typeof input.dead);
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<ObjectAlias.IMember> => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.id || "string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "(null | string)",
                    value: input.id
                }), "string" === typeof input.email || $report(_exceptionable, {
                    path: _path + ".email",
                    expected: "string",
                    value: input.email
                }), "string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name
                }), null === input.sex || 1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex || $report(_exceptionable, {
                    path: _path + ".sex",
                    expected: "(\"female\" | \"male\" | 1 | 2 | null)",
                    value: input.sex
                }), null === input.age || "number" === typeof input.age && Number.isFinite(input.age) || $report(_exceptionable, {
                    path: _path + ".age",
                    expected: "(null | number)",
                    value: input.age
                }), null === input.dead || "boolean" === typeof input.dead || $report(_exceptionable, {
                    path: _path + ".dead",
                    expected: "(boolean | null)",
                    value: input.dead
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "ObjectAlias",
                value: input
            })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ObjectAlias.IMember",
                value: elem
            })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ObjectAlias.IMember",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "ObjectAlias",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: Array<ObjectAlias.IMember>): typia.Primitive<Array<ObjectAlias.IMember>> => {
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any);
    const $co0 = (input: any): any => ({
        id: input.id as any,
        email: input.email as any,
        name: input.name as any,
        sex: input.sex as any,
        age: input.age as any,
        dead: input.dead as any
    });
    return Array.isArray(input) ? $cp0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectAlias.SPOILERS);
