import { createAction, handleActions } from 'redux-actions';
import AuthService from '../lib/api/AuthService';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const SIGNUP = 'auth/SIGNUP';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';
const SET_FORM_ERROR_MESSAGE = 'auth/SET_FORM_ERROR_MESSAGE';

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

export const signup = (username, email, password) => async (dispatch) => {
  dispatch({ type: SIGNUP });
  try {
    const response = await AuthService.registerUser(username, email, password);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: e,
      error: true,
    });
  }
};

export const setFormErrorMessage = createAction(
  SET_FORM_ERROR_MESSAGE,
  (message) => message,
);

//auth, authError are shared this may cause some problems
const initialState = {
  loading: {
    LOGIN: false,
    SIGNUP: false,
  },
  auth: null,
  authError: null,
  formErrorMessage: '',
};

const auth = handleActions(
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
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        LOGIN: false,
      },
      authError: action.payload,
    }),
    [SIGNUP]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        SIGNUP: true,
      },
    }),
    [SIGNUP_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        SIGNUP: false,
      },
      auth: action.payload,
      authError: null,
    }),
    [SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        SIGNUP: false,
      },
      authError: action.payload,
    }),
    [SET_FORM_ERROR_MESSAGE]: (state, action) => ({
      ...state,
      formErrorMessage: action.payload,
    }),
  },
  initialState,
);

export default auth;
