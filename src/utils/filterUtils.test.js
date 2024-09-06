import { defaultFilterObject, SORT_TYPES } from "src/App";
import { createFilterString, sortCars } from "src/utils/filterUtils";
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
    const sortedCars = [
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

    expect(sortCars(cars, filter)).toStrictEqual(sortedCars);
});

test("checks URL parameters generated from filters", () => {
    const filter = defaultFilterObject;
    filter.fuel = [1, 2, 3];
    filter.budgetEnd = 0;
    filter.budgetStart = 12;
    expect(createFilterString(filter)).toBe("fuel=1+2+3&budget=12-0");
});
