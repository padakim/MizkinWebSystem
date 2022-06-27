import { combineReducers } from 'redux';
import loading from './loading';
import authThunkImpl from './authThunkImpl';
import user from './user';
import admin from './admin';

const rootReducer = combineReducers({
  authThunkImpl,
  loading,
  user,
  admin,
});

export default rootReducer;
