import React, { useState, useEffect } from "react";
import Header from "./Header";
import Products from "./Products";
import AddForm from "./AddForm";

const data = [
  {
    id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
  {
    id: 2,
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 3,
    price: 649.99,
  },
  {
    id: 3,
    title: "Yamaha Portable Keyboard",
    quantity: 2,
    price: 155.99,
  },
  {
    id: 4,
    title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
    quantity: 0,
    price: 13.74,
  },
];

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleAddToCart = (id) => {
    return function (event) {
      setCart([...cart, id]);
    };
  };

  return (
    <div id="app">
      <Header products={products} cart={cart} />

      <main>
        <Products products={products} handleAddToCart={handleAddToCart} />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
