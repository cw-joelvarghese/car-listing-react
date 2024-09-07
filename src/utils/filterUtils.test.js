import { removeItemFromArray } from 'src/utils/filterUtils';
import { expect, test } from "vitest";

test("checks sort for array of cars", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const expected = [1, 2, 3, 5, 6, 7];
    expect(removeItemFromArray(array, 4)).toStrictEqual(expected);
});
