import React, { useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

const Products = ({ handleAddToCart }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("/api/products");
      console.log(data);
      dispatch({ type: "PRODUCTS_RECEIVED", payload: { products: data } });
      // setProducts(data);
    };

    console.log("this fires");
    getProducts();
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
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
};

export default Products;
