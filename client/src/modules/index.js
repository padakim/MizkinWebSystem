import { combineReducers } from 'redux';
import loading from './loading';
import authThunkImpl from './authThunkImpl';
import user from './user';

const rootReducer = combineReducers({
  authThunkImpl,
  loading,
  user,
});

export default rootReducer;
