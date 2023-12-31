// ProductList.js

import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import ProductItem from './ProductItem';
import './Styles.css';

const ProductList = () => {
  const { state, dispatch } = useContext(ProductContext);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product } });
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {state.products.map((product, index) => (
        <ProductItem key={index} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
