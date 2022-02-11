const cart = (state = [], action) => {
  switch (action.type) {
    case "CHECKOUT": {
      return [];
    }
    case "ADD_TO_CART": {
      if (state.find(item => item.productId === action.payload.item.productId)) {
        return state.map(item => {
          if (item.productId === action.payload.item.productId) {
            return action.payload.item;
          } else {
            return item;
          }
        });
      } else {
        return [...state, action.payload.item];
      }
    }
    case "CART_RECEIVED": {
      return action.payload.cart;
    }
    case "DELETE_PRODUCT": {
      let updatedCart = [ ...state ];
      if (state.find((item) => item.productId === action.payload.id)) {
        updatedCart = state.filter((item) => item.productId !== action.payload.id);
      }
      return updatedCart;
    }
    default: {
      return state;
    }
  }
};

export default cart;