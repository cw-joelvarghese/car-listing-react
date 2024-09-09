import { configureStore } from "@reduxjs/toolkit";
import carsReducers from "./reducers/carsReducer";
import filterReducer from "./reducers/filterReducer";

export default configureStore({
    reducer: {
        cars: carsReducers,
        filter: filterReducer
    },
});
