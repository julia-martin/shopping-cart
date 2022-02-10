import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const getCartData = async () => {
    const { data } = await axios.get("/api/cart");
    console.log(data);
    dispatch({ type: "CART_RECEIVED", payload: { cart: data } });
    // setCart(data);
  };
  useEffect(() => getCartData(), [dispatch]);

  const handleCheckout = async (e) => {
    try {
      await axios.post("/api/checkout");
      dispatch({ type: "CHECKOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  if (cart.length > 0) {
    return (
      <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

          {cart.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{`$${item.price}`}</td>
              </tr>
            );
          })}
          <tr>
            <td colspan="3" class="total">
              Total:{" "}
              {`$${cart
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}`}
            </td>
          </tr>
        </table>
        <a onClick={handleCheckout} class="button checkout">
          Checkout
        </a>
      </div>
    );
  } else {
    return (
      <div class="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a class="button checkout disabled">Checkout</a>
      </div>
    );
  }
};

export default Cart;
