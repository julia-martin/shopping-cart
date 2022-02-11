const products = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return [...state, action.payload.product];
    }
    case "ADD_TO_CART": {
      return state.map(product => {
        if (product._id === action.payload.product._id) {
          return { ...action.payload.product }
        } else {
          return product;
        }
      });
    }
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    }
    case "UPDATE_PRODUCT": {
      return state.map((product) => {
        if (product._id === action.payload.updatedProduct._id) {
          return { ...action.payload.updatedProduct };
        } else {
          return product;
        }
      });
    }
    case "DELETE_PRODUCT": {
      return state.filter((product) => product._id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

export default products;