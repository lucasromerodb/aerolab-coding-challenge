import { PROJECT_NAME } from "../utils";

/* === ACTIONS === */

const duck = "/products";

const PRODUCTS_CALL_REQUEST = `${PROJECT_NAME}${duck}/PRODUCTS_CALL_REQUEST`;
const PRODUCTS_CALL_SUCCESS = `${PROJECT_NAME}${duck}/PRODUCTS_CALL_SUCCESS`;
const PRODUCTS_CALL_FAILURE = `${PROJECT_NAME}${duck}/PRODUCTS_CALL_FAILURE`;
const REDEEM_CALL_REQUEST = `${PROJECT_NAME}${duck}/REDEEM_CALL_REQUEST`;
const REDEEM_CALL_SUCCESS = `${PROJECT_NAME}${duck}/REDEEM_CALL_SUCCESS`;
const REDEEM_CALL_FAILURE = `${PROJECT_NAME}${duck}/REDEEM_CALL_FAILURE`;

/* === TYPES === */

export const types = {
  PRODUCTS_CALL_REQUEST,
  PRODUCTS_CALL_SUCCESS,
  PRODUCTS_CALL_FAILURE,
  REDEEM_CALL_REQUEST,
  REDEEM_CALL_SUCCESS,
  REDEEM_CALL_FAILURE
};

/* === ACTION CREATORS === */

export const productsCallRequest = () => ({
  type: types.PRODUCTS_CALL_REQUEST
});

export const productsCallSuccess = products => ({
  type: types.PRODUCTS_CALL_SUCCESS,
  products
});

export const productsCallFailure = ({ error }) => ({
  type: types.PRODUCTS_CALL_FAILURE,
  error: error || "We have some problems fetching products"
});

export const redeemCallRequest = productId => ({
  type: types.REDEEM_CALL_REQUEST,
  productId
});

export const redeemCallSuccess = ({ message, error }) => ({
  type: types.REDEEM_CALL_SUCCESS,
  message: message || error
});

export const redeemCallFailure = ({ error }) => ({
  type: types.REDEEM_CALL_FAILURE,
  error
});

/* === SELECTORS === */

export const selectProducts = store => store.products.products;
export const selectFetching = store => store.products.fetching;
export const selectError = store => store.products.error;
export const selectRedeemId = store => store.products.redeemId;
export const selectRedeemMsg = store => store.products.redeemMsg;

/* === REDUCER === */

const initialState = {
  fetching: false,
  products: [],
  error: null,
  posting: false,
  redeemId: null,
  redeemMsg: null
};

function productsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.PRODUCTS_CALL_REQUEST:
      return { ...state, fetching: true, error: null };

    case types.PRODUCTS_CALL_SUCCESS:
      return { ...state, fetching: false, products: action.products, error: null };

    case types.PRODUCTS_CALL_FAILURE:
      return { ...state, fetching: false, products: [], error: action.error };

    case types.REDEEM_CALL_REQUEST:
      return { ...state, posting: true, redeemId: action.productId, redeemMsg: null };

    case types.REDEEM_CALL_SUCCESS:
      return { ...state, posting: false, redeemId: null, redeemMsg: action.message };

    case types.REDEEM_CALL_FAILURE:
      return { ...state, posting: false, redeemId: null, redeemMsg: action.error };

    default:
      return state;
  }
}

export default productsReducer;
