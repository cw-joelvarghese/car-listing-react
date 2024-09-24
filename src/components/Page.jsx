import styles from "src/App.module.css";
import Filter from "./Filter";
import Listing from "./Listing";
function Page({totalCount = 0}) {
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

export default Page;
