import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { watcherProducts, watcherUser, watcherRedeem, watcherPoints } from "../sagas";

import products from "./productsDuck";
import user from "./userDuck";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ products, user });

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(watcherProducts);
sagaMiddleware.run(watcherUser);
sagaMiddleware.run(watcherRedeem);
sagaMiddleware.run(watcherPoints);

export default store;
