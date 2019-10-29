export const logInUser = data => {
  return {
    type: 'LOG_IN_USER',
    payload: data
  };
};

export const logOutUser = () => {
  return {
    type: 'LOG_OUT_USER'
  };
};

export const initApp = () => {
  return {
    type: 'INIT_APP'
  };
};

export const accountCreationRequested = data => {
  return {
    type: 'ACCOUNT_CREATION',
    payload: data
  };
};
