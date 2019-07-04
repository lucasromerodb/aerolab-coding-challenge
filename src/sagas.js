import { takeLatest, call, put } from "redux-saga/effects";
import { getProducts } from "./api";
import { types, productsCallSuccess, productsCallFailure } from "./ducks/productsDuck";

function* productsSaga() {
  try {
    const products = yield call(getProducts);
    yield put(productsCallSuccess(products));
  } catch (error) {
    yield put(productsCallFailure(error));
  }
}

function* watcherProducts() {
  yield takeLatest(types.PRODUCTS_CALL_REQUEST, productsSaga);
}

export { watcherProducts };
