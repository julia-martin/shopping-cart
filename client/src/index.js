import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ProductProvider } from "./context/product-context";
import { CartProvider } from "./context/cart-context";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
