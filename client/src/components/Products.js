import React from "react";
import Product from "./Product";

const Products = ({ products, handleAddToCart }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        return (
          <Product
            key={product.id}
            {...product}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
};

export default Products;
