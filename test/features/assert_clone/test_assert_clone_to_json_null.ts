import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_to_json_null = _test_assert_clone(
    "toJSON() returning null",
    ToJsonNull.generate,
    (input) => TSON.assertClone(input),
);