import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_ajv_surplus_ArrayRecursiveUnionImplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRecursiveUnionImplicit",
  })(typia.json.application<[ArrayRecursiveUnionImplicit], "ajv", true>());
