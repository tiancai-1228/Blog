import { combineReducers } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";

export const rootReducer = combineReducers({
  counter: accountReducer,
});
