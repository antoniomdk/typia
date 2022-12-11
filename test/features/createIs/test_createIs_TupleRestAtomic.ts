import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TupleRestAtomic = _test_is(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    TSON.createIs<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
