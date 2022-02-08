import React from "react";
import Cart from "./Cart";

const Header = ({ products, cart, setCart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart products={products} cart={cart} setCart={setCart} />
    </header>
  );
};

export default Header;
