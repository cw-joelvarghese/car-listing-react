import styles from "src/App.module.css";
import Filter from "./components/Filter";
import Listing from "./components/Listing";
import { createContext, useEffect, useState } from "react";

export const CarContext = createContext();

function App() {
    const [cars, setCars] = useState();
    const [filter, setFilters] = useState();
    useEffect(() => {
        async function getData() {
            var a = await (await fetch("/api/stocks")).json();
            setCars(a.stocks);
        }
        getData();
    }, []);

    
    
    return (
        <CarContext.Provider value={{cars, setCars, filter, setFilters}}>
            <div className={styles.pageContainer}>
                <div className={styles.content}>
                    <div className={styles.gridHeading}>
                        <h2 className={styles.primaryHeading}>
                            1212 Used cars in india
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
