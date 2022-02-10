import { createStore } from "redux";

const rootReducer = (state = { products: [], cart: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return { ...state, products: action.payload.products };
    }
    case "CART_RECEIVED": {
      return { ...state, cart: action.payload.cart };
    }
    case "CHECKOUT": {
      return { ...state, cart: [] };
    }
    case "ADD_TO_CART": {
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload.cart,
        products: action.payload.products,
      };
    }
    case "DELETE_PRODUCT": {
      return {
        ...state,
        products: action.payload.products,
        cart: action.payload.cart,
      };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    }
    case "UPDATE_PRODUCT": {
      return { ...state, products: action.payload.products };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(rootReducer);

export default store;
