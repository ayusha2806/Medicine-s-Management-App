// Cart.js

import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import CartItem from './CartItem';
import './Styles.css';

const Cart = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {state.cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Cart;
