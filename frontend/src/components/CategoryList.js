import React from 'react';

function CategoryList({ onCategoryChange }) {
    const handleCategorySelect = (event) => {
        onCategoryChange(event.target.value);
    };

    return (
        <div>
            <h2>Categories</h2>
            <select onChange={handleCategorySelect}>
                <option value="">All Categories</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Appliances">Appliances</option>
            </select>
        </div>
    );
}

export default CategoryList;