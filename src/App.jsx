import styles from "src/App.module.css";
import Filter from "./components/Filter";
import Listing from "./components/Listing";
import { useEffect, useState } from "react";
import { getDataWithFilter } from "src/utils/appUtils";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "./reducers/carsReducer";

function App() {
    const [totalCount, setTotalCount] = useState(0);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        getDataWithFilter(filter).then((data) => {
            dispatch(setCars(data.stocks));
            setTotalCount(data.totalCount);
        });
    }, [filter]);

    return (
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
    );
}

export default App;
