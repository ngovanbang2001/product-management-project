import * as types from "./../constants/actionTypes.js";
import callApi from "./../utils/apiCaller";

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};
export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};
export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product).then((res) => {
      dispatch(actAddProduct(product));
    });
  };
};
export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
};

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};
export const actDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};
export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`/products/${id}`, "GET", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};
export const actGetProduct = (product) => {
  return {
    type: types.GETEDIT_PRODUCT,
    product,
  };
};
export const actEditProductRequest = (id, product) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "PUT", product).then((res) => {
      dispatch(actEditProduct(id, product));
    });
  };
};
export const actEditProduct = (id, product) => {
  return {
    type: types.EDIT_PRODUCT,
    id,
    product,
  };
};
