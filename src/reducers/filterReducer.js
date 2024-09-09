import { createSlice } from "@reduxjs/toolkit";
import { defaultFilterObject } from "src/utils/appUtils";
import { removeItemFromArray } from "src/utils/filterUtils";

export const filterSlice = createSlice({
    name: "filter",
    initialState: defaultFilterObject,
    reducers: {
        addFuel: (state, action) => {
            return {
                ...state,
                fuel: [...state.fuel, action.payload]
            }
        },
        removeFuel: (state, action) => {
            return {
                ...state,
                fuel: removeItemFromArray([...state.fuel], action.payload)
            }
        },
        setBudgetStart: (state, action) => {
            return {
                ...state,
                budgetStart: action.payload
            }
        },
        setBudgetEnd: (state, action) => {
            return {
                ...state,
                budgetEnd: action.payload
            }
        },
        setSort: (state, action) => {
            return {
                ...state,
                sort: action.payload
            }
        },
        setFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { setFilter, addFuel, removeFuel, setBudgetStart, setBudgetEnd, setSort } = filterSlice.actions;

export default filterSlice.reducer;
