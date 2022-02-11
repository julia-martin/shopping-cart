import apiClient from '../lib/ApiClient';

export const productsReceivedSuccess = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: { products } };
};

export const productsReceived = () => {
  return (dispatch) => {
    apiClient.getProducts((products) => {
      dispatch(productsReceivedSuccess(products));
    });
  };
};

export const productAddedSuccess = (product) => {
  return { type: "ADD_PRODUCT", payload: { product } };
};

export const productAdded = (product) => {
  return (dispatch) => {
    apiClient.addProduct(
      product,
      (product) => {
        dispatch(productAddedSuccess(product));
      }
    );
  };
};

export const productEditedSuccess = (updatedProduct) => {
  return { type: "UPDATE_PRODUCT", payload: { updatedProduct } };
};

export const productEdited = (id, product) => {
  return (dispatch) => {
    apiClient.updateProducts(
      id,
      product,
      (updatedProduct) => {
        dispatch(productEditedSuccess(updatedProduct));
      }
    );
  };
};

export const productDeletedSuccess = (id) => {
  return { type: "DELETE_PRODUCT", payload: { id } };
};

export const productDeleted = (id) => {
  return (dispatch) => {
    apiClient.deleteProduct(id, () => dispatch(productDeletedSuccess(id)));
  };
};