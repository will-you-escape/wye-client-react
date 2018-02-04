let emptyAuth = {
  logged: false
};

const auth = (authState = emptyAuth, action) => {
  switch (action.type) {
    case 'LOG_USER':
      authState.logged = true;
      return authState;
    default:
      return authState;
  }
};

export default auth;
