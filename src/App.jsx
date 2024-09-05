import styles from "src/App.module.css";
import Filter from "./components/Filter";
import Listing from "./components/Listing";

function App() {
    return (
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
    );
}

export default App;
