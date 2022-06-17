import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import authP from './authP';

const rootReducer = combineReducers({
  // auth,
  authP,
  loading,
});

export default rootReducer;
