import { createAction, handleActions } from 'redux-actions';
import AuthService from '../lib/api/AuthService';

//temporary login after refresh browser
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const LOGOUT = 'user/LOGOUT';
const LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'user/LOGOUT_SUCCESS';

//logout success failure may not needed

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    const response = await AuthService.logoutUser();
    resetLocalStorage();
    window.location.reload();
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const resetLocalStorage = () => {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
};

const initialState = {
  user: null,
  logoutError: null,
  response: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
    [LOGOUT_SUCCESS]: (state, action) => {
      return {
        ...state,
        response: action.payload,
      };
    },
    [LOGOUT_FAILURE]: (state, action) => ({
      ...state,
      authError: action.payload,
    }),
  },
  initialState,
);
