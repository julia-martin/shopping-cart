import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Header from "./Header";
import Products from "./Products";
import AddForm from "./AddForm";
import { getProducts, ProductContext } from "../context/product-context";
import { getCartData, CartContext } from "../context/cart-context";


const App = () => {
  const {products, dispatch: productDispatch} = useContext(ProductContext);
  const {cart, dispatch: cartDispatch} = useContext(CartContext);

  useEffect(() => {
    getProducts(productDispatch);
    getCartData(cartDispatch);
  }, []);

  return (
    <div id="app">
      <Header />
      <main>
        <Products />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
