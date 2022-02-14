import React, { useState, useContext } from "react";
import { addProduct, ProductContext } from "../context/product-context";

const AddForm = () => {
  const { dispatch } = useContext(ProductContext);
  const [ formVisible, setFormVisible ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ quantity, setQuantity ] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    addProduct(dispatch, { title, price, quantity });

    setTitle('');
    setPrice('');
    setQuantity('');
  };

  const handleCancel = (e) => {
    setFormVisible(false);
  };

  return (
    <div className={`add-form ${formVisible ? "visible" : ""}`}>
      <p>
        <a className="button add-product-button" onClick={() => setFormVisible(true)} data-testid="openFormButton">Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form aria-label="form">
        <div className="input-group">
          <label htmlFor="product-title">Product Name</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" id="product-title" value={title} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input onChange={(e) => setPrice(e.target.value)} type="text" id="product-price" value={price} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input onChange={(e) => setQuantity(e.target.value)} type="text" id="product-quantity" value={quantity} />
        </div>

        <div className="actions form-actions">
          <a data-testid="submitProduct" className="button" onClick={handleAddProduct}>Add</a>
          <a className="button" onClick={handleCancel}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
