import { PROJECT_NAME } from "../utils";

/* === ACTIONS === */

const duck = "/user";

const USER_CALL_REQUEST = `${PROJECT_NAME}${duck}/USER_CALL_REQUEST`;
const USER_CALL_SUCCESS = `${PROJECT_NAME}${duck}/USER_CALL_SUCCESS`;
const USER_CALL_FAILURE = `${PROJECT_NAME}${duck}/USER_CALL_FAILURE`;
const POINTS_CALL_REQUEST = `${PROJECT_NAME}${duck}/POINTS_CALL_REQUEST`;
const POINTS_CALL_SUCCESS = `${PROJECT_NAME}${duck}/POINTS_CALL_SUCCESS`;
const POINTS_CALL_FAILURE = `${PROJECT_NAME}${duck}/POINTS_CALL_FAILURE`;

/* === TYPES === */

export const types = {
  USER_CALL_REQUEST,
  USER_CALL_SUCCESS,
  USER_CALL_FAILURE,
  POINTS_CALL_REQUEST,
  POINTS_CALL_SUCCESS,
  POINTS_CALL_FAILURE
};

/* === ACTION CREATORS === */

export const userCallRequest = () => ({
  type: types.USER_CALL_REQUEST
});

export const userCallSuccess = user => ({
  type: types.USER_CALL_SUCCESS,
  user
});

export const userCallFailure = ({ error }) => ({
  type: types.USER_CALL_FAILURE,
  error: error || "We have some problems fetching user"
});

export const pointsCallRequest = amount => ({
  type: types.POINTS_CALL_REQUEST,
  amount
});

export const pointsCallSuccess = ({ message, error }) => ({
  type: types.POINTS_CALL_SUCCESS,
  message: message || error
});

export const pointsCallFailure = ({ error }) => ({
  type: types.POINTS_CALL_FAILURE,
  error: error || "We have some problems posting points"
});

/* === SELECTORS === */

export const selectUser = store => store.user;
export const selectUserPoints = store => store.user.points;
export const selectAmount = store => store.user.amount;
export const selectPointsMsg = store => store.user.pointsMsg;
export const selectUserRedeemHistory = store => store.user.redeemHistory;

/* === REDUCER === */

const initialState = {
  fetching: false,
  error: null,
  _id: null,
  name: "Kite",
  points: 0,
  redeemHistory: [],
  createDate: "Big Bang",
  adding: false,
  amount: 0,
  pointsMsg: null
};

function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_CALL_REQUEST:
      return { ...state, fetching: true, error: null };

    case types.USER_CALL_SUCCESS:
      return { ...state, fetching: false, ...action.user };

    case types.USER_CALL_FAILURE:
      return { ...state, fetching: false, user: null, error: action.error };

    case types.POINTS_CALL_REQUEST:
      return { ...state, adding: true, amount: action.amount, pointsMsg: null };

    case types.POINTS_CALL_SUCCESS:
      return { ...state, adding: false, amount: 0, pointsMsg: action.message };

    case types.POINTS_CALL_FAILURE:
      return { ...state, adding: false, amount: 0, pointsMsg: action.error };

    default:
      return state;
  }
}

export default userReducer;
