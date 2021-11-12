import { combineReducers } from "redux";
import products from "./products.js";
import formEdit from "./formEdit.js";
const myReducer = combineReducers({ products, formEdit });
export default myReducer;
