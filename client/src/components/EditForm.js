import React, { useState } from "react";

const EditForm = ({ id, title, price, quantity, onCancel, onUpdate }) => {
  const [ newTitle, setNewTitle ] = useState(title);
  const [ newPrice, setNewPrice ] = useState(price);
  const [ newQty, setNewQty ] = useState(quantity);

  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={newQty} onChange={(e) => setNewQty(e.target.value)} />
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={onUpdate(id, newTitle, newPrice, newQty)}>
            Update
          </a>
          <a class="button" onClick={onCancel}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
