import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

const wyeReducers = combineReducers({
  auth: authReducer,
  form: formReducer
});

export default wyeReducers;
