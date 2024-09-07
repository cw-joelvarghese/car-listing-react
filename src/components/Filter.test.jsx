import { render } from "@testing-library/react";
import { CarContext } from "src/App";
import Filter, {
    BudgetFilter,
    CheckboxFilterItem,
    FuelCheckboxFilter,
} from "src/components/Filter";
import { defaultFilterObject, FUEL_TYPES } from "src/utils/appUtils";
import { expect, test } from "vitest";

let filter = defaultFilterObject;
function setFilter(val) {
    if (typeof val === "function") {
        filter = val(filter);
        return;
    }
    filter = val;
}

test("Filter component renders correctly", () => {
    const tree = render(
        <CarContext.Provider value={{ filter, setFilter }}>
            <Filter />
        </CarContext.Provider>
    );
    expect(tree).toMatchSnapshot();
});

test("BudgetFilter component renders correctly", () => {
    const tree = render(
        <CarContext.Provider value={{ filter, setFilter }}>
            <BudgetFilter />
        </CarContext.Provider>
    );
    expect(tree).toMatchSnapshot();
});

test("CheckboxFilterItem component renders correctly", () => {
    const tree = render(
        <CheckboxFilterItem
            name={"PETROL"}
            onClick={() => {}}
            checked={false}
        />
    );
    expect(tree).toMatchSnapshot();
});

test("FuelCheckboxFilter component renders correctly", () => {
    const tree = render(
        <CarContext.Provider value={{ filter, setFilter }}>
            <FuelCheckboxFilter fuelType={FUEL_TYPES.PETROL} fuelName={"PETROL"} />
        </CarContext.Provider>
    );
    expect(tree).toMatchSnapshot();
});
