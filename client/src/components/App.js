import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Products from "./Products";
import AddForm from "./AddForm";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("this fires");
  }, []);

  const handleAddToCart = (id) => {
    return async function (event) {
      try {
        const response = await axios.post("/api/add-to-cart", {
          productId: id,
        });
        const updatedCartItem = response.data.item;
        const updatedProduct = response.data.product;

        let updatedCart;
        if (cart.find((item) => item.productId === id)) {
          updatedCart = cart.map((item) => {
            if (item.productId === id) {
              return updatedCartItem;
            } else {
              return item;
            }
          });
        } else {
          updatedCart = cart.concat(updatedCartItem);
        }

        const updatedProducts = products.map((product) => {
          if (product._id === id) {
            return updatedProduct;
          } else {
            return product;
          }
        });

        dispatch({
          type: "ADD_TO_CART",
          payload: { products: updatedProducts, cart: updatedCart },
        });
      } catch (err) {
        console.log(err);
      }
    };
  };

  return (
    <div id="app">
      <Header />
      <main>
        <Products handleAddToCart={handleAddToCart} />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
