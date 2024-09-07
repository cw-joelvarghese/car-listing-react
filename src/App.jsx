import styles from "src/App.module.css";
import Filter from "./components/Filter";
import Listing from "./components/Listing";
import { createContext, useEffect, useState } from "react";
import { defaultFilterObject, getDataWithFilter } from "src/utils/appUtils";

export const CarContext = createContext();

function App() {
    const [cars, setCars] = useState();
    const [totalCount, setTotalCount] = useState(0);
    const [filter, setFilter] = useState(defaultFilterObject);

    useEffect(() => {
        getDataWithFilter(filter).then((data) => {
            setCars(data.stocks);
            setTotalCount(data.totalCount);
        });
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
