import { CarContext, defaultFilterObject, FUEL_TYPES } from "src/App";
import styles from "./Filter.module.css";
import { useContext } from "react";

function removeItemFromArray(array, item) {
    var index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

function FuelCheckboxFilter({ fuelType, fuelName }) {
    const { filter, setFilter } = useContext(CarContext);
    function onClick(e) {
        const checked = e.target.checked;
        if (checked) {
            setFilter((prev) => ({
                ...prev,
                fuel: [...prev.fuel, fuelType],
            }));
            return;
        }
        setFilter((prev) => ({
            ...prev,
            fuel: removeItemFromArray([...prev.fuel], fuelType),
        }));
    }
    return (
        <CheckboxFilterItem
            name={fuelName}
            onClick={onClick}
            checked={filter.fuel.includes(fuelType)}
        />
    );
}

function CheckboxFilterItem({ name, onClick, checked }) {
    let r = (Math.random() + 1).toString(36).substring(7);
    return (
        <div className={styles.checkboxContainer}>
            <input
                type="checkbox"
                checked={checked}
                id={r}
                className={styles.checkbox}
                onChange={onClick}
            />
            <label className={styles.checkboxContainer} htmlFor={r}>
                {name}
            </label>
        </div>
    );
}

function BudgetFilter() {
    const { filter, setFilter } = useContext(CarContext);

    function onLowerChange(e) {
        setFilter((prev) => ({
            ...prev,
            budgetStart: Number(e.target.value)
        }))
    }

    function onUpperChange(e) {
        setFilter((prev) => ({
            ...prev,
            budgetEnd: Number(e.target.value)
        }))
    }

    return (
        <div className={styles.budgetContainer}>
            <input value={filter.budgetStart ?? ""} type="number" onChange={onLowerChange}/>
            <p>-</p>
            <input value={filter.budgetEnd ?? ""} type="number" onChange={onUpperChange}/>
        </div>
    );
}

function Filter() {

    const {setFilter} = useContext(CarContext)

    function onClearClick() {
        setFilter(defaultFilterObject)
    } 

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <div>Filters</div>
                <button className={styles.clearButton} onClick={onClearClick}>Clear All</button>
            </div>
            <div className={styles.checkboxesContainer}>
                <p>Fuel</p>
                {Object.keys(FUEL_TYPES).map((fuelType) => (
                    <FuelCheckboxFilter
                        key={fuelType}
                        fuelName={fuelType}
                        fuelType={FUEL_TYPES[fuelType]}
                    />
                ))}
                <p>Budget</p>
                <BudgetFilter />
            </div>
        </div>
    );
}

export default Filter;
