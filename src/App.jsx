import styles from "src/App.module.css";
import Filter from "./components/Filter";
import Listing from "./components/Listing";
import { createContext, useEffect, useState } from "react";

export const CarContext = createContext();

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

function App() {
    const [cars, setCars] = useState();
    const [totalCount, setTotalCount] = useState(0)
    const [filter, setFilter] = useState(defaultFilterObject);

    function createFilterString() {
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
        let searchString = "";
        Object.keys(searchFilter).forEach((key) => {
            searchString += `${key}=${searchFilter[key]}&`;
        });
        return searchString;
    }

    function sortCars(cars) {
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

    useEffect(() => {
        async function getData() {
            let filterString = createFilterString();
            var a = await (await fetch("/api/stocks?" + filterString)).json();
            setTotalCount(a.totalCount)
            const sortedCars = sortCars(a.stocks);
            console.log(sortedCars);
            setCars(sortedCars);
        }
        getData();
    }, [filter.fuel, filter.budgetEnd, filter.budgetStart, filter.sort]);

    return (
        <CarContext.Provider value={{ cars, setCars, filter, setFilter }}>
            <div className={styles.pageContainer}>
                <div className={styles.content}>
                    <div className={styles.gridHeading}>
                        <h2 className={styles.primaryHeading}>
                            {totalCount} Used cars in india
                        </h2>
                    </div>
                    <div>
                        <Filter />
                    </div>
                    <div>
                        <Listing />
                    </div>
                </div>
            </div>
        </CarContext.Provider>
    );
}

export default App;
