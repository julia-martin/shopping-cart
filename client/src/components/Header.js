import React from "react";
import Cart from "./Cart";

const Header = ({ products, cart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart products={products} cart={cart} />
    </header>
  );
};

export default Header;
