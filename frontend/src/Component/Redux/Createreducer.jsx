// Cardreducer.jsx

import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT } from "./Actions";

const initialState = {
  cartItems: []
};

const cardReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case INCREMENT:  // Corrected spelling
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    case DECREMENT:  // Corrected spelling
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
        )
      };
    default:
      return state;
  }
};

export default cardReducer;
