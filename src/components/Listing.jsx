import { useContext } from "react";
import styles from "./Listing.module.css";
import { CarContext } from "src/App";
import { SORT_TYPES } from 'src/utils/appUtils';

export function CarCard({ car }) {
    // priceNumeric
    return (
        <div className={styles.carCard}>
            <img src={car.imageUrl} className={styles.carImage} />
            <div className={styles.carInfo}>
                <div>
                    <h3>
                        {car.makeYear} {car.makeName}
                    </h3>
                    <p>{car.km} km | {car.fuel} | {car.areaName}, {car.cityName}</p>
                </div>

                <div className={styles.carEMIAndPrice}>
                    <p>Rs. {car.price}</p>
                    <p>{car.emiText	}</p>
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
    const { filter, setFilter, cars } = useContext(CarContext);
    function onSortChange(e) {
        var sortValue = Number(e.target.value);  
        setFilter((prev) => ({
            ...prev,
            sort: sortValue
        }))
      }
    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <p>Sort by: </p>
                <select onChange={onSortChange} value={filter.sort}>
                    <option value={SORT_TYPES.UNSORTED}>Unsorted</option>
                    <option value={SORT_TYPES.PRICE_LOW_TO_HIGH}>Price: Low to high</option>
                    <option value={SORT_TYPES.PRICE_HIGH_TO_LOW}>Price: High to low</option>
                </select>
            </div>
            
            {cars?.map((car) => 
                <CarCard key={car.profileId	} car={car} />
            )}
        </div>
    );
}

export default Listing;
