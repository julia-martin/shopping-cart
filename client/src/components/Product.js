import React, { useState, useContext } from "react";
import axios from 'axios';
import EditForm from "./EditForm";
import { addToCart, CartContext } from "../context/cart-context";
import { deleteProduct, updateProduct, ProductContext } from "../context/product-context";

const Product = ({ price, quantity, title, _id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { cart, dispatch: cartDispatch } = useContext(CartContext);
  const { products, dispatch: productDispatch } = useContext(ProductContext);

  // const handleUpdate = (id, title, price, quantity) => {
  //   return async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.put(`/api/products/${id}`, {
  //         title,
  //         price,
  //         quantity
  //       });
  //       const updatedProduct = response.data;
  //
  //       setIsEditing(false);
  //
  //       const updatedProducts = products.map(product => {
  //         if (product._id === id) {
  //           return updatedProduct;
  //         } else {
  //           return product;
  //         }
  //       });
  //       setProducts(updatedProducts);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  const handleUpdate = (id, newTitle, newPrice, newQty) => {
    return (e) => {
      e.preventDefault();
      const product = { title: newTitle, price: newPrice, quantity: newQty}
      updateProduct(productDispatch, id, product);
      setIsEditing(false);
    }
  }

  const handleCancel = () => {
    setIsEditing(false);
  };

  // const handleDelete = (id) => {
  //   return async (e) => {
  //     e.preventDefault();
  //     try {
  //       await axios.delete(`/api/products/${id}`);
  //       const newProducts = products.filter(product => product._id !== id);
  //       setProducts(newProducts);
  //
  //       if (cart.find(item => item.productId === id)) {
  //         setCart(cart.filter(item => item.productId !== id));
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // };

  return (
    <div class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">${price}</p>
        <p class="quantity">{quantity} left in stock.</p>
        {!isEditing && (
          <div class="actions product-actions">
            <a
              onClick={() => addToCart(cartDispatch, productDispatch, _id)}
              class={`button add-to-cart ${quantity === 0 ? "disabled" : ""}`}
            >
              Add to Cart
            </a>
            <a class="button edit" onClick={() => setIsEditing(true)}>
              Edit
            </a>
          </div>
        )}
        <a onClick={() => deleteProduct(productDispatch, _id)} class="delete-button">
          <span>X</span>
        </a>
      </div>
      {isEditing && (
        <EditForm id={_id} title={title} price={price} quantity={quantity} onCancel={handleCancel} onUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default Product;
