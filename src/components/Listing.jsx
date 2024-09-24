import { useEffect } from "react";
import styles from "./Listing.module.css";
import { getDataWithFilter, SORT_TYPES } from "src/utils/appUtils";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "src/reducers/filterReducer";
import { setCars } from "src/reducers/carsReducer";

export function CarCard({ car }) {
    return (
        <div className={styles.carCard}>
            <img src={car.imageUrl} className={styles.carImage} />
            <div className={styles.carInfo}>
                <div>
                    <h3>
                        {car.makeYear} {car.makeName}
                    </h3>
                    <p>
                        {car.km} km | {car.fuel} | {car.areaName},{" "}
                        {car.cityName}
                    </p>
                </div>

                <div className={styles.carEMIAndPrice}>
                    <p>Rs. {car.price}</p>
                    <p>{car.emiText}</p>
                </div>
                <p>Make Offer</p>
                <button className={styles.carSellerButton}>
                    Get Seller info
                </button>
            </div>
        </div>
    );
}

function Listing() {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars);
    function onSortChange(e) {
        var sortValue = Number(e.target.value);
        dispatch(
            setSort(sortValue)
        );
    }

    useEffect(() => {
        getDataWithFilter(filter).then((data) => {
            dispatch(setCars(data.stocks))
        })
    }, [filter]);

    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <p>Sort by: </p>
                <select className={styles.filterSelect} onChange={onSortChange} value={filter.sort}>
                    <option value={SORT_TYPES.UNSORTED}>Unsorted</option>
                    <option value={SORT_TYPES.PRICE_LOW_TO_HIGH}>
                        Price: Low to high
                    </option>
                    <option value={SORT_TYPES.PRICE_HIGH_TO_LOW}>
                        Price: High to low
                    </option>
                </select>
            </div>

            {cars?.map((car, index) => (
                <CarCard key={index} car={car} />
            ))}
        </div>
    );
}

export default Listing;
