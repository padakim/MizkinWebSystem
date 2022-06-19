import { createAction, handleActions } from 'redux-actions';
import AuthService from '../lib/api/AuthService';

const LOGIN = 'authP/LOGIN';
const LOGIN_SUCCESS = 'authP/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'authP/LOGIN_FAILURE';

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const response = await AuthService.loginUser(username, password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const initialState = {
  loading: {
    LOGIN: false,
  },
  auth: null,
  authError: null,
};

const authP = handleActions(
  {
    [LOGIN]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        LOGIN: true,
      },
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        LOGIN: false,
      },
      auth: action.payload,
    }),
    [LOGIN_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        LOGIN: false,
      },
      authError: action.payload,
    }),
  },
  initialState,
);

export default authP;
