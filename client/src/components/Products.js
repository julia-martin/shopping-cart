import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { productsReceived } from '../actions/productActions.js';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsReceived());
  }, [dispatch]);

  console.log(products);
  return (
    <div class="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        return (
          <Product
            key={product["_id"]}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default Products;
