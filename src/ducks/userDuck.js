import { PROJECT_NAME } from "../utils";

/* === ACTIONS === */

const duck = "/user";

const USER_CALL_REQUEST = `${PROJECT_NAME}${duck}/USER_CALL_REQUEST`;
const USER_CALL_SUCCESS = `${PROJECT_NAME}${duck}/USER_CALL_SUCCESS`;
const USER_CALL_FAILURE = `${PROJECT_NAME}${duck}/USER_CALL_FAILURE`;

/* === TYPES === */

export const types = {
  USER_CALL_REQUEST,
  USER_CALL_SUCCESS,
  USER_CALL_FAILURE
};

/* === ACTION CREATORS === */

export const userCallRequest = () => ({
  type: USER_CALL_REQUEST
});

export const userCallSuccess = user => ({
  type: USER_CALL_SUCCESS,
  user
});

export const userCallFailure = ({ error }) => ({
  type: USER_CALL_FAILURE,
  error
});

// export const setPointsMsgAction = ({ message }) => ({
//   type: POINTS_MSG,
//   message
// });

/* === SELECTORS === */

export const selectUser = store => store.user;

/* === REDUCER === */

const initialState = {
  fetching: false,
  error: null,
  _id: null,
  name: "Kite",
  points: 0,
  redeemHistory: [],
  createDate: "Big Bang"
  // pointsMsg: null
};

function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_CALL_REQUEST:
      return { ...state, fetching: true, error: null };

    case types.USER_CALL_SUCCESS:
      return { ...state, fetching: false, ...action.user };

    case types.USER_CALL_FAILURE:
      return { ...state, fetching: false, user: null, error: action.error };

    // case POINTS_MSG:
    //   return { ...state, pointsMsg: action.message };

    default:
      return state;
  }
}

export default userReducer;
