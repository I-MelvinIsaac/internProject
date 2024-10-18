import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import PriceRangeFilter from './components/PriceRangeFilter';
import BrandFilter from './components/BrandFilter';
import StockFilter from './components/StockFilter';
import './App.css';

// Sample data for products
const productsData = [
    {
        id: 1,
        name: 'Galaxy Ultra Smartphone',
        description: 'Latest smartphone with AI camera and 128GB storage.',
        price: 70000,
        category: 'Gadgets',
        brand: 'Samsung',
        stock: 10,
        image: 'https://i.pinimg.com/736x/b4/84/91/b48491958aaefbbda997c1cebc496e1a.jpg',
        video: 'https://www.youtube.com/embed/xteMVLLsh4o',
    },
    {
        id: 2,
        name: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear headphones with 20 hours battery life.',
        price: 12000,
        category: 'Gadgets',
        brand: 'Sony',
        stock: 0,
        image: 'https://i.pinimg.com/236x/bd/4b/79/bd4b7992b74fcae4cd8ffdf065ccea48.jpg',
    },
    {
        id: 3,
        name: 'Smartwatch Pro',
        description: 'Track your fitness and health with GPS and heart rate monitoring.',
        price: 22500,
        category: 'Gadgets',
        brand: 'Apple',
        stock: 5,
        image: 'https://i.pinimg.com/550x/7d/da/f3/7ddaf3d81d08ed28ad025cb9fb2fb5da.jpg',
        video: 'https://www.youtube.com/embed/e6T34u51MaA',
    },
    {
        id: 4,
        name: 'Refrigerator',
        description: '500L double-door refrigerator with energy-saving technology.',
        price: 80000,
        category: 'Appliances',
        brand: 'Samsung',
        stock: 3,
        image: 'https://i.pinimg.com/474x/22/b8/59/22b859eea5e6a08ebb8e16d3d4c9fa04.jpg',
        video: 'https://www.youtube.com/embed/A2HqZnKIViI',
    },
    {
        id: 5,
        name: 'Washing Machine',
        description: 'Top-load washing machine with 6.5kg capacity and smart wash programs.',
        price: 43000,
        category: 'Appliances',
        brand: 'Whirlpool',
        stock: 0,
        image: 'https://bansiwalastores.com/cdn/shop/products/wm120_4_480x480.jpg?v=1691909655',
        video: 'https://www.youtube.com/embed/c5qkC-kif7g',
    },
];

function App() {
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100000]); // Assuming price range is 0 to 100000
    const [brandFilter, setBrandFilter] = useState('');
    const [stockFilter, setStockFilter] = useState('');

    const handleCategoryChange = (category) => {
        setCategoryFilter(category);
        filterProducts(category, brandFilter, priceRange, stockFilter);
    };

    const handlePriceRangeChange = (range) => {
        setPriceRange(range);
        filterProducts(categoryFilter, brandFilter, range, stockFilter);
    };

    const handleBrandChange = (brand) => {
        setBrandFilter(brand);
        filterProducts(categoryFilter, brand, priceRange, stockFilter);
    };

    const handleStockChange = (status) => {
        setStockFilter(status);
        filterProducts(categoryFilter, brandFilter, priceRange, status);
    };

    const filterProducts = (category, brand, price, stock) => {
        const filtered = productsData.filter(product => {
            const inCategory = category === '' || product.category === category;
            const inBrand = brand === '' || product.brand === brand;
            const inPriceRange = product.price >= price[0] && product.price <= price[1];
            const inStock = stock === '' || 
                            (stock === 'in-stock' && product.stock > 0) || 
                            (stock === 'out-of-stock' && product.stock === 0);
            return inCategory && inBrand && inPriceRange && inStock;
        });
        setFilteredProducts(filtered);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Product Catalog</h1>
                <div className="filters">
                    <CategoryList onCategoryChange={handleCategoryChange} />
                    <BrandFilter onBrandChange={handleBrandChange} />
                    <PriceRangeFilter onPriceRangeChange={handlePriceRangeChange} />
                    <StockFilter onStockChange={handleStockChange} />
                </div>
                <ProductList products={filteredProducts} />
            </header>
        </div>
    );
}

export default App;