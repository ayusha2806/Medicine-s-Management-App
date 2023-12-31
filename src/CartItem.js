// CartItem.js

import React from 'react';
import './Styles.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <p>Name: {item.name}</p>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

export default CartItem;
