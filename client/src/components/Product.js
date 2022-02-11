import React, { useState } from "react";
import EditForm from "./EditForm";
import { useDispatch } from "react-redux";
import { productEdited, productDeleted } from '../actions/productActions.js';
import { addedToCart } from '../actions/cartActions.js';

const Product = ({ price, quantity, title, _id, setCart }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = (id, title, price, quantity) => {
    return async (e) => {
      e.preventDefault();
      try {
        dispatch(productEdited(id, { title, price, quantity }));
        setIsEditing(false);
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
        dispatch(productDeleted(id));
      } catch (err) {
        console.log(err);
      }
    };
  };

  const handleAddToCart = (id) => {
    return async (e) => {
      e.preventDefault();
      try {
        dispatch(addedToCart(id));
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
