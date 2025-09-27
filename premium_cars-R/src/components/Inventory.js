import React from 'react';
import { inventoryData } from '../data/inventoryData';

const VehicleTile = ({ car }) => {
    return (
        <div className="vehicle-tile">
            <img src={car.imageSrc} alt={car.title} />
            <div className="vehicle-tile-content">
                <h3>{car.title}</h3>
                <p className="details">{car.specs}</p>
                <p className="price">{car.price}</p>
                <a href={car.detailsLink} className="details-link">View Details →</a>
            </div>
        </div>
    );
};

const Inventory = () => {
    const availableCars = inventoryData.filter(car => car.isAvailable);

    return (
        <section id="inventory">
            <div className="container">
                <div className="section-title">
                    <h2>Featured Inventory</h2>
                </div>
                
                <div className="inventory-container">
                    {availableCars.map(car => (
                        <VehicleTile key={car.id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Inventory;