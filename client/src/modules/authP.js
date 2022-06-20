import { createAction, handleActions } from 'redux-actions';
import AuthService from '../lib/api/AuthService';

const LOGIN = 'authP/LOGIN';
const LOGIN_SUCCESS = 'authP/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'authP/LOGIN_FAILURE';
const SIGNUP = 'authP/SIGNUP';
const SIGNUP_SUCCESS = 'authP/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'authP/SIGNUP_FAILURE';
const SET_FORM_ERROR_MESSAGE = 'authP/SET_FORM_ERROR_MESSAGE';

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

//need to fix auth initialState cuz it's shared
const initialState = {
  loading: {
    LOGIN: false,
  },
  auth: null,
  authError: null,
  formErrorMessage: '',
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

export default authP;
