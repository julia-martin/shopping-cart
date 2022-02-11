import apiClient from "../lib/ApiClient";

export const cartReceivedSuccess = (cart) => {
  return { type: "CART_RECEIVED", payload: { cart } };
};

export const cartReceived = () => {
  return (dispatch) => {
    apiClient.getCart((cart) => {
      dispatch(cartReceivedSuccess(cart));
    });
  };
};

export const addedToCartSuccess = (item, product) => {
  return { type: "ADD_TO_CART", payload: { item, product } };
};

export const addedToCart = (productId) => {
  return (dispatch) => {
    apiClient.addToCart(
      productId,
      ({ item, product }) => dispatch(addedToCartSuccess(item, product))
    );
  };
};

export const checkoutSuccess = () => {

};

export const checkedOut = () => {
  return (dispatch) => {
    apiClient.checkout(() => dispatch(checkoutSuccess()));
  }
};