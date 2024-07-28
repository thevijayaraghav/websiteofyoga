// Actions.jsx

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';  // Corrected spelling
export const DECREMENT = 'DECREMENT';  // Corrected spelling

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    ...product,
    quantity: 1  // Initial quantity
  }
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const increment = (id) => ({  // Updated to pass id
  type: INCREMENT,
  payload: id
});

export const decrement = (id) => ({  // Updated to pass id
  type: DECREMENT,
  payload: id
});
