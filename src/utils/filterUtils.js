export const FUEL_TYPES = {
    PETROL: 1,
    DIESEL: 2,
    CNG: 3,
    LPG: 4,
    ELECTRIC: 5,
    HYBRID: 6,
};

export const SORT_TYPES = {
    UNSORTED: 1,
    PRICE_LOW_TO_HIGH: 2,
    PRICE_HIGH_TO_LOW: 3,
};

export const defaultFilterObject = {
    fuel: [],
    budgetStart: null,
    budgetEnd: null,
    sort: SORT_TYPES.UNSORTED,
};

export function sortCars(cars, filter) {
    if (filter.sort === SORT_TYPES.UNSORTED) {
        return cars;
    }
    if (filter.sort === SORT_TYPES.PRICE_HIGH_TO_LOW) {
        return cars.sort(function (a, b) {
            var priceA = a.priceNumeric,
                priceB = b.priceNumeric;
            // Compare the 2 dates
            return priceB - priceA;
        });
    }
    if (filter.sort === SORT_TYPES.PRICE_LOW_TO_HIGH) {
        return cars.sort(function (a, b) {
            var priceA = a.priceNumeric,
                priceB = b.priceNumeric;
            // Compare the 2 dates
            return priceA - priceB;
        });
    }
}

export function createFilterString(filter) {
    const searchFilter = {};
    if (filter.fuel.length > 0) {
        searchFilter.fuel = filter.fuel.join("+");
    }
    if (
        typeof filter.budgetStart == "number" &&
        typeof filter.budgetEnd == "number"
    ) {
        searchFilter.budget = `${filter.budgetStart}-${filter.budgetEnd}`;
    }
    return decodeURIComponent(new URLSearchParams(searchFilter).toString()).toString()
}