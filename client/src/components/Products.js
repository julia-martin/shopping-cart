import React, { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../context/product-context";


const Products = () => {
  const { products } = useContext(ProductContext);

  // const handleAddToCart = (id) => {
  //   return async function (event) {
  //     try {
  //       const response = await axios.post('/api/add-to-cart', { productId: id });
  //       const updatedCartItem = response.data.item;
  //       const updatedProduct = response.data.product;
  //
  //       let updatedCart;
  //       if (cart.find(item => item.productId === id)) {
  //         updatedCart = cart.map(item => {
  //           if (item.productId === id) {
  //             return updatedCartItem;
  //           } else {
  //             return item;
  //           }
  //         });
  //       } else {
  //         updatedCart = cart.concat(updatedCartItem);
  //       }
  //       setCart(updatedCart);
  //
  //       const updatedProducts = products.map(product => {
  //         if (product._id === id) {
  //           return updatedProduct;
  //         } else {
  //           return product;
  //         }
  //       });
  //       setProducts(updatedProducts);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // };
  //
  return (
    <div class="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        return (
          <Product
            key={product['_id']}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default Products;
