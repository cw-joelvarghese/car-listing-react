import styles from "./Filter.module.css";
import { defaultFilterObject, FUEL_TYPES } from "src/utils/appUtils";
import { useDispatch, useSelector } from "react-redux";
import { addFuel, removeFuel, setBudgetEnd, setBudgetStart, setFilter } from "src/reducers/filterReducer";

export function FuelCheckboxFilter({ fuelType, fuelName }) {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    function onCheckboxClick(e) {
        const checked = e.target.checked;
        if (checked) {
            dispatch(
                addFuel(fuelType)
            );
            return;
        }
        dispatch(
            removeFuel(fuelType)
        );
    }
    return (
        <CheckboxFilterItem
            name={fuelName}
            onClick={onCheckboxClick}
            checked={filter.fuel.includes(fuelType)}
        />
    );
}

export function CheckboxFilterItem({ name, onClick, checked }) {
    return (
        <div className={styles.checkboxContainer}>
            <input
                type="checkbox"
                checked={checked}
                id={name}
                className={styles.checkbox}
                onChange={onClick}
            />
            <label className={styles.checkboxLabel} htmlFor={name}>
                {name}
            </label>
        </div>
    );
}

export function BudgetFilter() {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    function onLowerChange(e) {
        dispatch(
            setBudgetStart(Number(e.target.value))
        );
    }

    function onUpperChange(e) {
        dispatch(
            setBudgetEnd(Number(e.target.value))
        );
    }

    return (
        <div className={styles.budgetContainer}>
            <input
                value={filter.budgetStart ?? ""}
                type="number"
                onChange={onLowerChange}
            />
            <p>-</p>
            <input
                value={filter.budgetEnd ?? ""}
                type="number"
                onChange={onUpperChange}
            />
        </div>
    );
}

function Filter() {
    const dispatch = useDispatch();

    function onClearClick() {
        dispatch(setFilter(defaultFilterObject));
    }

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <div>Filters</div>
                <button className={styles.clearButton} onClick={onClearClick}>
                    Clear All
                </button>
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
