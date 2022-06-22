import { createAction, handleActions } from 'redux-actions';
import AuthService from '../lib/api/AuthService';
import createRequestThunk from '../lib/createRequestThunk';
import { createRequestActionTypes } from '../lib/createRequestThunk';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');

// export const changeField = createAction(
//   CHANGE_FIELD,
//   ({ form, key, value }) => ({
//     form,
//     key,
//     value,
//   }),
// );
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const login = createRequestThunk(LOGIN, AuthService.loginUser);

const initialState = {
  signup: {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    // [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    //   produce(state, (draft) => {
    //     draft[form][key] = value;
    //   }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      authError: null,
      auth: action.payload,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
