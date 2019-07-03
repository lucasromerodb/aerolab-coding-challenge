import { PROJECT_NAME } from "../utils";

/* === TYPES === */

const duck = "/products";

const SET_PRODUCTS = `${PROJECT_NAME}${duck}/SET_PRODUCTS`;
const REDEEM_MSG = `${PROJECT_NAME}${duck}/REDEEM_MSG`;

/* === ACTIONS === */

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
export const selectRedeemMsg = store => store.products.redeemMsg;

/* === REDUCER === */

const initialState = {
  products: [],
  redeemMsg: ""
};

function products(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };

    case REDEEM_MSG:
      return { ...state, redeemMsg: action.message };

    default:
      return state;
  }
}

export default products;
