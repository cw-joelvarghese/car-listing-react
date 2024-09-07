
import { createFilterString, defaultFilterObject, SORT_TYPES, sortCars } from "src/utils/appUtils";
import { expect, test } from "vitest";

test("checks sort for array of cars", () => {
    const cars = [
        {
            priceNumeric: 4,
        },
        {
            priceNumeric: 2,
        },
        {
            priceNumeric: 1,
        },
        {
            priceNumeric: 3,
        },
    ];
    const filter = defaultFilterObject;
    filter.sort = SORT_TYPES.PRICE_LOW_TO_HIGH;
    const expectedSortedCars = [
        {
            priceNumeric: 1,
        },
        {
            priceNumeric: 2,
        },
        {
            priceNumeric: 3,
        },
        {
            priceNumeric: 4,
        },
    ];

    expect(sortCars(cars, filter)).toStrictEqual(expectedSortedCars);
});

test("checks URL parameters generated from filters", () => {
    const filter = defaultFilterObject;
    filter.fuel = [1, 2, 3];
    filter.budgetEnd = 0;
    filter.budgetStart = 12;

    const expected = "fuel=1+2+3&budget=12-0";
    expect(createFilterString(filter)).toBe(expected);
});
