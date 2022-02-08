import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import Products from "./Products";
import AddForm from "./AddForm";

// const data = [
//   {
//     id: 1,
//     title: "Amazon Kindle E-reader",
//     quantity: 5,
//     price: 79.99,
//   },
//   {
//     id: 2,
//     title: "Apple 10.5-Inch iPad Pro",
//     quantity: 3,
//     price: 649.99,
//   },
//   {
//     id: 3,
//     title: "Yamaha Portable Keyboard",
//     quantity: 2,
//     price: 155.99,
//   },
//   {
//     id: 4,
//     title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
//     quantity: 0,
//     price: 13.74,
//   },
// ];

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get('/api/products');
    setProducts(data);
  };

  const getCartData = async () => {
    const { data } = await axios.get('/api/cart');
    setCart(data);
  };

  useEffect(() => {
    getProducts();
    getCartData();
  }, []);

  const handleAddToCart = (id) => {
    return async function (event) {
      try {
        const response = await axios.post('/api/add-to-cart', { productId: id });
        const updatedCartItem = response.data.item;
        const updatedProduct = response.data.product;

        let updatedCart;
        if (cart.find(item => item.productId === id)) {
          updatedCart = cart.map(item => {
            if (item.productId === id) {
              return updatedCartItem;
            } else {
              return item;
            }
          });
        } else {
          updatedCart = cart.concat(updatedCartItem);
        }
        setCart(updatedCart);

        const updatedProducts = products.map(product => {
          if (product._id === id) {
            return updatedProduct;
          } else {
            return product;
          }
        });
        setProducts(updatedProducts);
      } catch (err) {
        console.log(err);
      }
    };
  };

  return (
    <div id="app">
      <Header products={products} cart={cart} setCart={setCart} />
      <main>
        <Products products={products} setProducts={setProducts} handleAddToCart={handleAddToCart} cart={cart} setCart={setCart} />
        <AddForm products={products} setProducts={setProducts} />
      </main>
    </div>
  );
};

export default App;
