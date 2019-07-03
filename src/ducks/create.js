import { createStore, combineReducers } from "redux";

import products from "./productsDuck";
import user from "./userDuck";

const reducers = combineReducers({ products, user });
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
