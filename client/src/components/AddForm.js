import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productAdded } from '../actions/productActions.js';

const AddForm = () => {
  const dispatch = useDispatch();
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();

    dispatch(productAdded({
      title: name,
      price,
      quantity: qty,
    }));

    setName("");
    setPrice("");
    setQty("");
  };

  const handleCancel = (e) => {
    setFormVisible(false);
  };

  return (
    <div className={`add-form ${formVisible ? "visible" : ""}`}>
      <p>
        <a
          className="button add-product-button"
          onClick={() => setFormVisible(true)}
          data-testid="openFormButton"
        >
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form aria-label="form">
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="product-name"
            value={name}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            id="product-price"
            value={price}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            onChange={(e) => setQty(e.target.value)}
            type="text"
            id="product-quantity"
            value={qty}
          />
        </div>

        <div className="actions form-actions">
          <a
            data-testid="submitProduct"
            className="button"
            onClick={handleAddProduct}
          >
            Add
          </a>
          <a className="button" onClick={handleCancel}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
