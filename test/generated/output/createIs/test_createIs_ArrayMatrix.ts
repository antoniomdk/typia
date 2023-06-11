import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_ArrayMatrix = _test_is("ArrayMatrix", ArrayMatrix.generate, (input: any): input is ArrayMatrix => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
}, ArrayMatrix.SPOILERS);
