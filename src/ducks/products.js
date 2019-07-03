import { PROJECT_NAME } from "../utils";

const duck = "/products";
const REDEEM_MSG = `${PROJECT_NAME}${duck}/REDEEM_MSG`;

export const setRedeemMsgAction = ({ message }) => ({
  type: REDEEM_MSG,
  message
});

export const selectRedeemMsg = store => store.products.redeemMsg;

const initialState = {
  redeemMsg: ""
};

function products(state = initialState, action = {}) {
  switch (action.type) {
    case REDEEM_MSG:
      return { ...state, redeemMsg: action.message };

    default:
      return state;
  }
}
export default products;
