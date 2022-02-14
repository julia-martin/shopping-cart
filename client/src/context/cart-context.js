import {useReducer, createContext} from "react";
import apiClient from "../lib/ApiClient";

const CartContext = createContext();

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case "CHECKOUT": {
      return [];
    }
    case "ADD_TO_CART": {
      if (state.find(item => item.productId === action.payload.item.productId)) {
        return state.map(item => {
          if (item.productId === action.payload.item.productId) {
            return action.payload.item;
          } else {
            return item;
          }
        });
      } else {
        return [...state, action.payload.item];
      }
    }
    case "CART_RECEIVED": {
      return action.payload.cart;
    }
    case "DELETE_PRODUCT": {
      let updatedCart = [ ...state ];
      if (state.find((item) => item.productId === action.payload.id)) {
        updatedCart = state.filter((item) => item.productId !== action.payload.id);
      }
      return updatedCart;
    }
    default: {
      return state;
    }
  }
}

const addToCart = async (cartDispatch, productDispatch, productId) => {
  const { product, item } = await apiClient.addToCart(productId);
  cartDispatch({ type: "ADD_TO_CART", payload: { item }});
  productDispatch({ type: "ADD_TO_CART", payload: { product }});
}

const getCartData = async (dispatch) => {
  const cart = await apiClient.getCart();
  dispatch({ type: "CART_RECEIVED", payload: { cart }});
};

const checkout = async (dispatch) => {
  await apiClient.checkout();
  dispatch({ type: "CHECKOUT" });
}

const CartProvider = ({children}) => {
  const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext, CartProvider, getCartData, addToCart, checkout}
