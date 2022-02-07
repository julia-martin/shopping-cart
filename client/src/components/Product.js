import React, { useState } from "react";
import EditForm from "./EditForm";

const Product = ({ price, quantity, title, handleAddToCart, id }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {};

  const handleCancel = () => {
    setIsEditing(false);
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
              onClick={handleAddToCart(id)}
              class={`button add-to-cart ${quantity === 0 ? "disabled" : ""}`}
            >
              Add to Cart
            </a>
            <a class="button edit" onClick={() => setIsEditing(true)}>
              Edit
            </a>
          </div>
        )}
        <a class="delete-button">
          <span>X</span>
        </a>
      </div>
      {isEditing && (
        <EditForm handleCancel={handleCancel} handleUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default Product;
