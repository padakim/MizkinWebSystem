import { createAction, handleActions } from 'redux-actions';
import AdminService from '../lib/api/AdminService';
import createRequestThunk, {
  createRequestActionTypes,
} from '../lib/createRequestThunk';

const [
  CREATE_USER_BY_ADMIN,
  CREATE_USER_BY_ADMIN_SUCCESS,
  CREATE_USER_BY_ADMIN_FAILURE,
] = createRequestActionTypes('admin/CREATE_USER_BY_ADMIN');

export const createUserByAdmin = createRequestThunk(
  CREATE_USER_BY_ADMIN,
  AdminService.createUser,
);

const initialState = {
  admin: null,
  adminError: null,
};

const admin = handleActions(
  {
    [CREATE_USER_BY_ADMIN_SUCCESS]: (state, action) => ({
      ...state,
      admin: action.payload,
    }),
    [CREATE_USER_BY_ADMIN_FAILURE]: (state, action) => ({
      ...state,
      adminError: action.payload,
    }),
  },
  initialState,
);

export default admin;
