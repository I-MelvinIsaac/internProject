import React from 'react';

function StockFilter({ onStockChange }) {
    const handleStockSelect = (event) => {
        onStockChange(event.target.value);
    };

    return (
        <div>
            <h2>Stock Status</h2>
            <select onChange={handleStockSelect}>
                <option value="">All Products</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
            </select>
        </div>
    );
}

export default StockFilter;