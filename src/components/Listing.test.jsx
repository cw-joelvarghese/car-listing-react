import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import Listing, { CarCard } from "src/components/Listing";
import store from "src/store";
import { expect, test, vi } from "vitest";
import '@testing-library/jest-dom'


const car = {
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
};

global.fetch = vi.fn();

// Creating a fetch replacement function with .json() implementation
function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data)) };
}

test("Listing component renders correctly", async () => {
    const response = {
        stocks: [
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
                makeName: "Mazda",
                km: 200,
                fuel: 1,
                areaName: "Worli",
                cityName: "Mumbai",
                price: 12,
                emiText: "Starts from Rs. 12 Lakh",
                profileId: 2,
            },
        ],
    };

    // Mocking request with fixed data
    fetch.mockResolvedValue(createFetchResponse(response));
    const tree = render(
        <Provider store={store}>
            <Listing />
        </Provider>
    );
    await waitFor(() => {
        expect(tree.getByText(/Suzuki/i)).toBeInTheDocument()
        expect(tree).toMatchSnapshot();
    });
});

test("CarCard component renders correctly", () => {
    const tree = render(<CarCard car={car} />);
    expect(tree).toMatchSnapshot();
});
