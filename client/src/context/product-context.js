import {useReducer, createContext} from "react";
import apiClient from "../lib/ApiClient";

const ProductContext = createContext();

const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return [...state, action.payload.product];
    }
    case "ADD_TO_CART": {
      return state.map(product => {
        if (product._id === action.payload.product._id) {
          return { ...action.payload.product }
        } else {
          return product;
        }
      });
    }
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    }
    case "UPDATE_PRODUCT": {
      return state.map((product) => {
        if (product._id === action.payload.updatedProduct._id) {
          return { ...action.payload.updatedProduct };
        } else {
          return product;
        }
      });
    }
    case "DELETE_PRODUCT": {
      return state.filter((product) => product._id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const addProduct = async (dispatch, product) => {
  const newProduct = await apiClient.addProduct(product);
  dispatch({ type: "ADD_PRODUCT", payload: { product: newProduct }});
}

const getProducts = async (dispatch) => {
  const products = await apiClient.getProducts();
  dispatch({ type: "PRODUCTS_RECEIVED", payload: { products }});
}

const deleteProduct = async (dispatch, id) => {
  const deletedProduct = await apiClient.deleteProduct(id);
  dispatch({ type: "DELETE_PRODUCT", payload: { id }});
}

const updateProduct = async (dispatch, id, product) => {
  const updatedProduct = await apiClient.updateProducts(id, product);
  dispatch({ type: "UPDATE_PRODUCT", payload: { updatedProduct }});
}

const ProductProvider = ({children}) => {
  const [products, dispatch] = useReducer(ProductReducer, []);
  return (
    <ProductContext.Provider value={{products, dispatch}}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductContext, ProductProvider, addProduct, getProducts, deleteProduct, updateProduct }
