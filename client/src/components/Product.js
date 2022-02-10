import React, { useState } from "react";
import axios from "axios";
import EditForm from "./EditForm";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ price, quantity, title, handleAddToCart, _id, setCart }) => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = (id, title, price, quantity) => {
    return async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(`/api/products/${id}`, {
          title,
          price,
          quantity,
        });
        const updatedProduct = response.data;

        setIsEditing(false);

        const updatedProducts = products.map((product) => {
          if (product._id === id) {
            return updatedProduct;
          } else {
            return product;
          }
        });
        dispatch({
          type: "UPDATE_PRODUCT",
          payload: { products: updatedProducts },
        });
      } catch (err) {
        console.log(err);
      }
    };
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    return async (e) => {
      e.preventDefault();
      try {
        await axios.delete(`/api/products/${id}`);
        const newProducts = products.filter((product) => product._id !== id);

        // setProducts(newProducts);
        let updatedCart = cart;

        if (cart.find((item) => item.productId === id)) {
          updatedCart = cart.filter((item) => item.productId !== id);
        }
        dispatch({
          type: "DELETE_PRODUCT",
          payload: { products: newProducts, cart: updatedCart },
        });
      } catch (err) {
        console.log(err);
      }
    };
  };

  return (
    <div class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">${price}</p>
        <p class="quantity">{quantity} left in stock.</p>
        {!isEditing && (
          <div class="actions product-actions">
            <a
              onClick={handleAddToCart(_id)}
              class={`button add-to-cart ${quantity === 0 ? "disabled" : ""}`}
            >
              Add to Cart
            </a>
            <a class="button edit" onClick={() => setIsEditing(true)}>
              Edit
            </a>
          </div>
        )}
        <a onClick={handleDelete(_id)} class="delete-button">
          <span>X</span>
        </a>
      </div>
      {isEditing && (
        <EditForm
          id={_id}
          title={title}
          price={price}
          quantity={quantity}
          onCancel={handleCancel}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default Product;
