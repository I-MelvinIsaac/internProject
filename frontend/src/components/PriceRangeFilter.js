import React from 'react';

function PriceRangeFilter({ onPriceRangeChange }) {
    const handlePriceChange = (event) => {
        const value = event.target.value.split(',').map(Number);
        onPriceRangeChange(value);
    };

    return (
        <div>
            <h2>Price Range</h2>
            <select onChange={handlePriceChange}>
                <option value={[0, 100000]}>All Prices</option>
                <option value={[0, 20000]}>Below ₹20,000</option>
                <option value={[20000, 50000]}>₹20,000 - ₹50,000</option>
                <option value={[50000, 80000]}>₹50,000 - ₹80,000</option>
                <option value={[80000, 100000]}>Above ₹80,000</option>
            </select>
        </div>
    );
}

export default PriceRangeFilter;