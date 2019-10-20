import { combineReducers, Reducer } from "redux";
import { reducer as formReducer, FormReducer } from "redux-form";
import authReducer, { IAuthState } from "./authReducer";
import snackBarReducer, {
  ISnackBarState
} from "../components/snackBar/reducer";

// The top-level state object
export interface IApplicationState {
  auth: IAuthState;
  snackBar: ISnackBarState;
  form: FormReducer;
}

const wyeReducers = combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer,
  form: formReducer
});

export default wyeReducers;
