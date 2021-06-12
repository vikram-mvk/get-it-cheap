import { combineReducers } from "redux";
import items from "./items";
import details from "./details";
import auth from "./auth";

const reducers = combineReducers({
  items,
  details,
  auth,
});

export default reducers;
