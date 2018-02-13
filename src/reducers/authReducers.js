import authCore from '../auth/core';

let emptyAuth = {
  logged: false
};

const auth = (state = emptyAuth, action) => {
  switch (action.type) {
    case 'INIT_APP':
      return Object.assign({}, state, {
        logged: authCore.loggedIn()
      });
    case 'LOG_USER':
      return Object.assign({}, state, {
        logged: true
      });
    case 'LOG_OUT_USER':
      return Object.assign({}, state, {
        logged: false
      });
    default:
      return state;
  }
};

export default auth;
