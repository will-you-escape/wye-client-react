let emptyAuth = {
  logged: false
};

const auth = (state = emptyAuth, action) => {
  switch (action.type) {
    case 'LOG_USER':
      return [
        ...state,
        {
          auth: {
            logged: true
          }
        }
      ];
    default:
      return state;
  }
};

export default auth;
