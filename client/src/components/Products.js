import React from "react";
import Product from "./Product";

const Products = ({ products, setProducts, handleAddToCart, cart, setCart }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        return (
          <Product
            key={product['_id']}
            {...product}
            handleAddToCart={handleAddToCart}
            setProducts={setProducts}
            products={products}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
};

export default Products;
