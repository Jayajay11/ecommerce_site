import React from 'react';
import '../Product.css';

// Importing the product images
import clothes1 from '../assets/image/Clothes1.jpg';
import clothes2 from '../assets/image/Clothes2.jpg';
import clothes3 from '../assets/image/Clothes3.jpg';

const Products = () => {
  // Define an array of products with names, prices, and image sources
  const products = [
    { id: 1, name: 'Clothes 1', price: '$49.99', image: clothes1 },
    { id: 2, name: 'Clothes 2', price: '$59.99', image: clothes2 },
    { id: 3, name: 'Clothes 3', price: '$69.99', image: clothes3 },
  ];

  return (
    <section className="products" id="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
