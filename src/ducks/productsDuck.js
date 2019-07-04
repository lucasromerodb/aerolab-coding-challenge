import { PROJECT_NAME } from "../utils";

/* === ACTIONS === */

const duck = "/products";

const PRODUCTS_CALL_REQUEST = `${PROJECT_NAME}${duck}/PRODUCTS_CALL_REQUEST`;
const PRODUCTS_CALL_SUCCESS = `${PROJECT_NAME}${duck}/PRODUCTS_CALL_SUCCESS`;
const PRODUCTS_CALL_FAILURE = `${PROJECT_NAME}${duck}/PRODUCTS_CALL_FAILURE`;
const SET_PRODUCTS = `${PROJECT_NAME}${duck}/SET_PRODUCTS`; // TODO: REMOVE?
const REDEEM_MSG = `${PROJECT_NAME}${duck}/REDEEM_MSG`; // TODO: REMOVE?

/* === TYPES === */

export const types = {
  PRODUCTS_CALL_REQUEST,
  PRODUCTS_CALL_SUCCESS,
  PRODUCTS_CALL_FAILURE,
  SET_PRODUCTS,
  REDEEM_MSG
};

/* === ACTION CREATORS === */

export const productsCallRequest = () => ({
  type: types.PRODUCTS_CALL_REQUEST
});

export const productsCallSuccess = products => ({
  type: types.PRODUCTS_CALL_SUCCESS,
  products
});

export const productsCallFailure = error => ({
  type: types.PRODUCTS_CALL_FAILURE,
  error
});

export const setProductsAction = products => ({
  type: SET_PRODUCTS,
  products
});

export const setRedeemMsgAction = ({ message }) => ({
  type: REDEEM_MSG,
  message
});

/* === SELECTORS === */

export const selectProducts = store => store.products.products;
export const selectFetching = store => store.products.fetching;
export const selectError = store => store.products.error;
export const selectRedeemMsg = store => store.products.redeemMsg;

/* === REDUCER === */

const initialState = {
  fetching: false,
  products: [],
  redeemMsg: null,
  error: null
};

function productsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PRODUCTS_CALL_REQUEST:
      return { ...state, fetching: true, error: null };

    case PRODUCTS_CALL_SUCCESS:
      return { ...state, fetching: false, products: action.products };

    case PRODUCTS_CALL_FAILURE:
      return { ...state, fetching: false, error: action.error, products: [] };

    // case SET_PRODUCTS: // TODO: REMOVE
    //   return { ...state, products: action.products };

    case REDEEM_MSG: // TODO: MAYBE REMOVE?
      return { ...state, redeemMsg: action.message };

    default:
      return state;
  }
}

export default productsReducer;
