import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_misc_assertPrune_AtomicIntersection = _test_misc_assertPrune(
    "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input: any): AtomicIntersection => {
    const assert = (input: any): AtomicIntersection => {
        const __is = (input: any): input is AtomicIntersection => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                "string" === typeof input[2]
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is AtomicIntersection => {
                const $guard = (typia.misc.createAssertPrune as any).guard;
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "AtomicIntersection",
                            value: input,
                        })) &&
                        (input.length === 3 ||
                            $guard(true, {
                                path: _path + "",
                                expected: "[boolean, number, string]",
                                value: input,
                            })) &&
                        ("boolean" === typeof input[0] ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected: "boolean",
                                value: input[0],
                            })) &&
                        (("number" === typeof input[1] &&
                            Number.isFinite(input[1])) ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected: "number",
                                value: input[1],
                            })) &&
                        ("string" === typeof input[2] ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected: "string",
                                value: input[2],
                            }))) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "AtomicIntersection",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    const prune = (input: AtomicIntersection): void => {};
    assert(input);
    prune(input);
    return input;
});