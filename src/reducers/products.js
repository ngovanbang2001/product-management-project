import * as types from "./../constants/actionTypes";
var initialState = [];

const myReducer = (state = initialState, action) => {
  const findIndex = (id) => {
    var products = state;
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return action.products;
    case types.ADD_PRODUCT:
      const { product } = action;

      state.push(product);
      return [...state];
    case types.DELETE_PRODUCT:
      const index = findIndex(action.id);
      state.splice(index, 1);
      return [...state];
    case types.EDIT_PRODUCT:
      var id = findIndex(action.id);
      state[id] = action.product;
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
