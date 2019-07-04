import { takeLatest, call, put, select } from "redux-saga/effects";
import { getProducts, getUserMe, getUserHistory, postRedeem, postPoints } from "./api";
import {
  types as productTypes,
  productsCallSuccess,
  productsCallFailure,
  redeemCallSuccess,
  redeemCallFailure,
  selectRedeemId
} from "./ducks/productsDuck";

import {
  types as userTypes,
  userCallSuccess,
  userCallFailure,
  pointsCallSuccess,
  pointsCallFailure,
  selectAmount
} from "./ducks/userDuck";

import { types as historyTypes, historyCallSuccess, historyCallFailure } from "./ducks/historyDuck";

/* === GET === */

// products
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

// user
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

// history
function* historySaga() {
  try {
    const history = yield call(getUserHistory);
    yield put(historyCallSuccess(history));
  } catch (error) {
    yield put(historyCallFailure(error));
  }
}

function* watcherHistory() {
  yield takeLatest(historyTypes.HISTORY_CALL_REQUEST, historySaga);
}

/* === POST === */

// products
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

// user
function* pointsSaga() {
  try {
    const amount = yield select(selectAmount);
    const message = yield call(postPoints, amount);
    yield put(pointsCallSuccess(message));
  } catch (error) {
    yield put(pointsCallFailure(error));
  }
}

function* watcherPoints() {
  yield takeLatest(userTypes.POINTS_CALL_REQUEST, pointsSaga);
}

export { watcherProducts, watcherUser, watcherHistory, watcherRedeem, watcherPoints };
