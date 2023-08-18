import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_encode_ObjectOptional =
    _test_protobuf_encode<ObjectOptional>(ObjectOptional)({
        encode: typia.protobuf.createEncode<ObjectOptional>(),
        message: typia.protobuf.message<ObjectOptional>(),
    });
