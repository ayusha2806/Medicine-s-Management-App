// ProductForm.js

import React, { useContext, useState } from 'react';
import { ProductContext, Product } from './ProductContext';
import './Styles.css';

const ProductForm = () => {
  const { dispatch } = useContext(ProductContext);
  const [product, setProduct] = useState({ ...Product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    const id = new Date().getTime().toString();
    dispatch({ type: 'ADD_PRODUCT', payload: { ...product, id } });
    setProduct({ ...Product });
  };

  return (
    <div className="product-form">
      <h2>Add Product</h2>
      <div className="input-group">
        <label>
          Medicine Name:
          <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={product.description} onChange={handleInputChange} />
        </label>
      </div>
      <div className="input-group">
        <label>
          Price:
          <input type="text" name="price" value={product.price} onChange={handleInputChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={product.quantity} onChange={handleInputChange} />
        </label>
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
