import React from 'react';
import '../styles/Products.css';

// Image imports
import banner from '../images/banner.jpeg';
import product1 from '../images/product1.jpeg';
import product2 from '../images/product2.jpeg';

const products = [
  {
    name: 'Fresh Cow Milk',
    image: product1,
    description: 'Pure, farm-fresh milk delivered daily. No additives or preservatives.',
  },
  {
    name: 'Organic Ghee',
    image: product2,
    description: 'Traditional bilona ghee made from desi cow milk. Rich in aroma and taste.',
  },
];

const Products = () => {
  return (
    <div className="product-container">
      {/* Top Banner */}
      <div className="top-banner">
        <img src={banner} alt="Dairy Banner" />
        <h1>Our Natural & Healthy Dairy Products</h1>
      </div>

      {/* Product Grid */}
      <h2>🐮 Products</h2>
      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
