import { ICreateAccountData } from "../api/user";
import { ILogInData } from "../api/logUser";

export const logInUser = (data: ILogInData) => {
  return {
    type: "LOG_IN_USER",
    payload: data
  };
};

export const logOutUser = () => {
  return {
    type: "LOG_OUT_USER"
  };
};

export const initApp = () => {
  return {
    type: "INIT_APP"
  };
};

export const accountCreationRequested = (data: ICreateAccountData) => {
  return {
    type: "ACCOUNT_CREATION",
    payload: data
  };
};
