const authReducers = (state = [], action) => {
  switch (action.type) {
    case 'LOG_USER':
      return [
        ...state,
        {
          userLogged: true
        }
      ];
    default:
      return state;
  }
};

export default authReducers;
