let emptyAuth = {
  logged: false
};

const auth = (state = emptyAuth, action) => {
  switch (action.type) {
    case 'LOG_USER':
      return Object.assign({}, state, {
        logged: true
      });
    default:
      return state;
  }
};

export default auth;
