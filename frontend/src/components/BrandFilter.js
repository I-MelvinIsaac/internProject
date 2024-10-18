import React from 'react';

function BrandFilter({ onBrandChange }) {
    const handleBrandSelect = (event) => {
        onBrandChange(event.target.value);
    };

    return (
        <div>
            <h2>Brands</h2>
            <select onChange={handleBrandSelect}>
                <option value="">All Brands</option>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Apple">Apple</option>
                <option value="Whirlpool">Whirlpool</option>
            </select>
        </div>
    );
}

export default BrandFilter;