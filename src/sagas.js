import { takeLatest, call, put, select } from "redux-saga/effects";
import { getProducts, getUserMe, postRedeem } from "./api";
import {
  types as productTypes,
  productsCallSuccess,
  productsCallFailure,
  redeemCallSuccess,
  redeemCallFailure,
  selectRedeemId
} from "./ducks/productsDuck";
import { types as userTypes, userCallSuccess, userCallFailure } from "./ducks/userDuck";

/* === GET === */

function* productsSaga() {
  try {
    const products = yield call(getProducts);
    yield put(productsCallSuccess(products));
  } catch (error) {
    yield put(productsCallFailure(error));
  }
}

function* watcherProducts() {
  yield takeLatest(productTypes.PRODUCTS_CALL_REQUEST, productsSaga);
}

function* userSaga() {
  try {
    const user = yield call(getUserMe);
    yield put(userCallSuccess(user));
  } catch (error) {
    yield put(userCallFailure(error));
  }
}

function* watcherUser() {
  yield takeLatest(userTypes.USER_CALL_REQUEST, userSaga);
}

/* === POST === */

function* redeemSaga() {
  try {
    const productId = yield select(selectRedeemId);
    const message = yield call(postRedeem, productId);
    yield put(redeemCallSuccess(message));
  } catch (error) {
    yield put(redeemCallFailure(error));
  }
}

function* watcherRedeem() {
  yield takeLatest(productTypes.REDEEM_CALL_REQUEST, redeemSaga);
}

export { watcherProducts, watcherUser, watcherRedeem };
