import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReceived, checkedOut } from '../actions/cartActions.js';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => dispatch(cartReceived()), [dispatch]);

  const handleCheckout = async (e) => {
    try {
      dispatch(checkedOut());
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
