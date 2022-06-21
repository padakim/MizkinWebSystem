import { combineReducers } from 'redux';
import loading from './loading';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
});

export default rootReducer;
