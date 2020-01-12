import { combineReducers } from "redux";
import { reducer as formReducer, FormReducer } from "redux-form";
import authReducer, { IAuthState } from "./authReducer";
import snackBarReducer, {
  ISnackBarState
} from "../components/snackBar/reducer";
import APIReducer, { IAPIReducer } from  

// The top-level state object
export interface IApplicationState {
  auth: IAuthState;
  snackBar: ISnackBarState;
  form: FormReducer;
  api: IAPIReducer;
}

const wyeReducers = combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer,
  form: formReducer,
  api: APIReducer
});

export default wyeReducers;
