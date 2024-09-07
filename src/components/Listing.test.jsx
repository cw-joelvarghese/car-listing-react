import { render } from "@testing-library/react";
import { CarContext } from "src/App";
import Listing, { CarCard } from "src/components/Listing";
import { defaultFilterObject } from "src/utils/appUtils";
import { expect, test } from "vitest";

let filter = defaultFilterObject;
function setFilter(val) {
    if (typeof val === "function") {
        filter = val(filter);
        return;
    }
    filter = val;
}
let cars = [
    {
        imageUrl: "https://image.com",
        makeYear: 2002,
        makeName: "Suzuki",
        km: 200,
        fuel: 1,
        areaName: "Worli",
        cityName: "Mumbai",
        price: 12,
        emiText: "Starts from Rs. 12 Lakh",
        profileId: 1,
    },
    {
        imageUrl: "https://image.com",
        makeYear: 2002,
        makeName: "Suzuki",
        km: 200,
        fuel: 1,
        areaName: "Worli",
        cityName: "Mumbai",
        price: 12,
        emiText: "Starts from Rs. 12 Lakh",
        profileId: 2,
    },
];

test("Listing component renders correctly", () => {
    const tree = render(
        <CarContext.Provider value={{ filter, setFilter, cars }}>
            <Listing />
        </CarContext.Provider>
    );
    expect(tree).toMatchSnapshot();
});

test("CarCard component renders correctly", () => {
    const tree = render(<CarCard car={cars[0]}/>);
    expect(tree).toMatchSnapshot();
});
