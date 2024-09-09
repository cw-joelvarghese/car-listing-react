import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Filter, {
    BudgetFilter,
    CheckboxFilterItem,
    FuelCheckboxFilter,
} from "src/components/Filter";
import store from "src/store";
import { FUEL_TYPES } from "src/utils/appUtils";
import { expect, test } from "vitest";
import '@testing-library/jest-dom'


test("Filter component renders correctly", () => {
    const tree = render(
        <Provider store={store}>
            <Filter />
        </Provider>
    );
    expect(tree).toMatchSnapshot();
});

test("BudgetFilter component renders correctly", () => {
    const tree = render(
        <Provider store={store}>
            <BudgetFilter />
        </Provider>
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
        <Provider store={store}>
            <FuelCheckboxFilter fuelType={FUEL_TYPES.PETROL} fuelName={"PETROL"} />
        </Provider>
    );
    expect(tree.getByText(/Petrol/i)).toBeInTheDocument()
    expect(tree).toMatchSnapshot();
});
