import { PROJECT_NAME } from "../utils";

/* === ACTIONS === */

const duck = "/history";

const HISTORY_CALL_REQUEST = `${PROJECT_NAME}${duck}/HISTORY_CALL_REQUEST`;
const HISTORY_CALL_SUCCESS = `${PROJECT_NAME}${duck}/HISTORY_CALL_SUCCESS`;
const HISTORY_CALL_FAILURE = `${PROJECT_NAME}${duck}/HISTORY_CALL_FAILURE`;

/* === TYPES === */

export const types = {
  HISTORY_CALL_REQUEST,
  HISTORY_CALL_SUCCESS,
  HISTORY_CALL_FAILURE
};

/* === ACTION CREATORS === */

export const historyCallRequest = () => ({
  type: types.HISTORY_CALL_REQUEST
});

export const historyCallSuccess = history => ({
  type: types.HISTORY_CALL_SUCCESS,
  history
});

export const historyCallFailure = ({ error }) => ({
  type: types.HISTORY_CALL_FAILURE,
  error: error || "We have some problems fetching history"
});

/* === SELECTORS === */

export const selectHistory = store => store.history.history;

/* === REDUCER === */

const initialState = {
  fetching: false,
  history: [],
  error: null
};

function historyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.HISTORY_CALL_REQUEST:
      return { ...state, fetching: true, error: null };

    case types.HISTORY_CALL_SUCCESS:
      return { ...state, fetching: false, history: action.history, error: null };

    case types.HISTORY_CALL_FAILURE:
      return { ...state, fetching: false, history: [], error: action.error };

    default:
      return state;
  }
}

export default historyReducer;
