let emptyAuth = {
  logged: false
};

const auth = (state = emptyAuth, action) => {
  switch (action.type) {
    case 'API_LOGGED_OUT':
      return Object.assign({}, state, {
        logged: false
      });
    case 'API_LOGGED_IN':
      return Object.assign({}, state, {
        logged: true
      });
    default:
      return state;
  }
};

export default auth;
