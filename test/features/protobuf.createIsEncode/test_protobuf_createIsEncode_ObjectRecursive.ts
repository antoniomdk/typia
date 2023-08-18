import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_isEncode_ObjectRecursive =
    _test_protobuf_isEncode<ObjectRecursive>(ObjectRecursive)({
        isEncode: typia.protobuf.createIsEncode<ObjectRecursive>(),
        message: typia.protobuf.message<ObjectRecursive>(),
    });
