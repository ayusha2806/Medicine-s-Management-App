// ProductItem.js

import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import './Styles.css';

const ProductItem = ({ product }) => {
  const { dispatch } = useContext(ProductContext);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, id: new Date().getTime().toString() } });
  };

  return (
    <div className="product-item">
      <h3>Name: {product.name}</h3>
      <p>Description: {product.description}</p>
      <p>Price: ₹{product.price}</p>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={() => {}}
          readOnly
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
