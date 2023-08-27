import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_random_ObjectGenericArray = _test_random(
    "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)({
    random: () => typia.random<ObjectGenericArray>(),
    assert: typia.createAssert<ObjectGenericArray>(),
});