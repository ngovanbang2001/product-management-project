import * as types from "./../constants/actionTypes";
var initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETEDIT_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
export default myReducer;
