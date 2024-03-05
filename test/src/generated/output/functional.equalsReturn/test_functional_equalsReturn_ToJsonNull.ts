import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_functional_equalsReturn_ToJsonNull =
  _test_functional_equalsReturn("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      (input: ToJsonNull): ToJsonNull | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ToJsonNull => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );