import { handleActions } from 'redux-actions';
import AuthService from '../lib/api/AuthService';
import createRequestThunk, {
  createRequestActionTypes,
} from '../lib/createRequestThunk';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createRequestActionTypes('auth/SIGNUP');
// const RESET_STATE = 'auth/RESET_STATE';

export const login = createRequestThunk(LOGIN, AuthService.loginUser);
export const signup = createRequestThunk(SIGNUP, AuthService.registerUser);
// export const resetState = createAction(RESET_STATE);

const initialState = {
  loginResponse: null,
  signupResponse: null,
};

const authThunkImpl = handleActions(
  {
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      loginResponse: action.payload,
    }),
    [LOGIN_FAILURE]: (state, action) => ({
      ...state,
      loginResponse: action.payload,
    }),
    [SIGNUP_SUCCESS]: (state, action) => ({
      ...state,
      signupResponse: action.payload,
    }),
    [SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      signupResponse: action.payload,
    }),
    // [RESET_STATE]: (state) => ({
    //   ...state,
    //   loginResponse: null,
    //   signupResponse: null,
    // }),
  },
  initialState,
);
export default authThunkImpl;
