import typia from "typia";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_ObjectRecursive = _test_application("ajv")("ObjectRecursive", typia.application<[
    ObjectRecursive
], "ajv">());
