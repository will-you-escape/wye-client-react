import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import snackBarReducer from '../components/snackBar/reducer';

const wyeReducers = combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer,
  form: formReducer
});

export default wyeReducers;
