import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <div className="product-item" key={product.id}>
            {/* Product image is displayed first */}
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-title">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <p className={`product-stock ${product.stock > 0 ? 'in-stock' : ''}`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
            {/* Video is displayed last, if available */}
            {product.video && (
              <iframe
                className="product-video"
                src={product.video}
                title={product.name}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))
      ) : (
        <p className="no-products-message">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;