import { PROJECT_NAME } from "../utils";

/* === TYPES === */

const duck = "/user";

const SET_USER = `${PROJECT_NAME}${duck}/SET_USER`;
const POINTS_MSG = `${PROJECT_NAME}${duck}/POINTS_MSG`;

/* === ACTIONS === */

export const setUserAction = user => ({
  type: SET_USER,
  user
});

export const setPointsMsgAction = ({ message }) => ({
  type: POINTS_MSG,
  message
});

/* === SELECTORS === */

export const selectUser = store => store.user;

/* === REDUCER === */

const initialState = {
  points: 0,
  name: "Kite",
  _id: null,
  redeemHistory: [],
  createDate: "Big Bang",
  pointsMsg: ""
};

function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };

    case POINTS_MSG:
      return { ...state, pointsMsg: action.message };

    default:
      return state;
  }
}

export default userReducer;
