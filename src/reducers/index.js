import { combineReducers } from 'redux';
import auth from './authReducers';

const wyeReducers = combineReducers({
  auth
});

export default wyeReducers;
