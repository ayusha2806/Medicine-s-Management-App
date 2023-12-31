// ProductContext.js

import { createContext } from 'react';

export const ProductContext = createContext();

export const Product = {
  id: '',
  name: '',
  description: '',
  price: '',
  quantity: 1,
};
