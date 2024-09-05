import styles from "./Filter.module.css";

function CheckboxFilterItem({ item }) {
    let r = (Math.random() + 1).toString(36).substring(7);
    return (
        <div className={styles.checkboxContainer}>
            <input
                type="checkbox"
                id={r}
                style={{
                    margin: 0,
                }}
            />
            <label htmlFor={r}>{item.name}</label>
        </div>
    );
}

function Filter() {
    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <div>Filters</div>
                <div>Clear All</div>
            </div>
            <div className={styles.checkboxesContainer}>
                <p>Fuel</p>
                <CheckboxFilterItem item={{ name: "sadas" }} />
                <CheckboxFilterItem item={{ name: "sadas" }} />
                <CheckboxFilterItem item={{ name: "sadas" }} />
            </div>
        </div>
    );
}

export default Filter;
