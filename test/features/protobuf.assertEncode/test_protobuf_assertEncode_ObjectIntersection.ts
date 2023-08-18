import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_assertEncode_ObjectIntersection =
    _test_protobuf_assertEncode<ObjectIntersection>(ObjectIntersection)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectIntersection>(input),
        message: typia.protobuf.message<ObjectIntersection>(),
    });
