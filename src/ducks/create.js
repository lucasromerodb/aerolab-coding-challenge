import { createStore, combineReducers } from "redux";
import products from "./productsDuck";

const reducers = combineReducers({ products });
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
