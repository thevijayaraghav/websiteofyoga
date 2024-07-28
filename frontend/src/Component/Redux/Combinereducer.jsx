import { combineReducers } from "redux";
import Cardreducer from "./Createreducer";

export const rootreducer = combineReducers({
  cart: Cardreducer,
});
