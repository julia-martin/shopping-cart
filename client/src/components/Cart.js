import React, { useContext } from "react";
import { checkout, CartContext } from "../context/cart-context";
// import axios from 'axios';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

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

          {cart.map(item => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{`$${item.price}`}</td>
              </tr>
            );
          })
          }
          <tr>
            <td colspan="3" class="total">
              Total: {`$${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`}
            </td>
          </tr>
        </table>
        <a onClick={() => checkout(dispatch)} class="button checkout">Checkout</a>
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
