// App.js

import React, { useReducer, useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Cart from './Cart';
import { ProductContext } from './ProductContext';

const initialState = {
  products: [],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Medicine's Management App</h1>
        <ProductForm />
        <ProductList />
        <button onClick={handleToggleCart}>Show Cart</button>
        {showCart && <Cart />}
      </div>
    </ProductContext.Provider>
  );
};

export default App;
