import { createStore, combineReducers } from "redux";
import productsReducer from "./products";

const reducers = combineReducers({ productsReducer });
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
