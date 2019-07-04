import { takeLatest, call, put, select } from "redux-saga/effects";
import { getProducts, postRedeem } from "./api";
import {
  types,
  productsCallSuccess,
  productsCallFailure,
  redeemCallSuccess,
  redeemCallFailure,
  selectRedeemId
} from "./ducks/productsDuck";

function* productsSaga() {
  try {
    const data = yield call(getProducts);
    yield put(productsCallSuccess(data));
  } catch (error) {
    yield put(productsCallFailure(error));
  }
}

function* watcherProducts() {
  yield takeLatest(types.PRODUCTS_CALL_REQUEST, productsSaga);
}

function* redeemSaga() {
  try {
    const productId = yield select(selectRedeemId);
    const data = yield call(postRedeem, productId);
    console.warn(productId, data);
    yield put(redeemCallSuccess(data));
  } catch (error) {
    yield put(redeemCallFailure(error));
  }
}

function* watcherRedeem() {
  yield takeLatest(types.REDEEM_CALL_REQUEST, redeemSaga);
}

export { watcherProducts, watcherRedeem };
