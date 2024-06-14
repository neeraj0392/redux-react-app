import { createStore, combineReducers } from "redux";
import { accountBalanceReducer } from "../reducer";

export const store = createStore(
  combineReducers({
    accountBalance: accountBalanceReducer,
  })
);
