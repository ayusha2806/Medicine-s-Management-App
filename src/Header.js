// Header.js

import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import './styles.css';

const Header = () => {
  const { cart, showCart, setShowCart } = useContext(ProductContext);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="header">
      <h1>Medicine Management</h1>
      <div className="right-section">
        <button className="cart-button" onClick={handleShowCart}>
          Show Cart ({cart.length})
        </button>
      </div>
    </div>
  );
};

export default Header;
