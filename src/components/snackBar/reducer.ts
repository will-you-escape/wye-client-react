let emptySnackBar = {
  shouldDisplay: false,
  content: {
    title: '',
    message: '',
    severity: ''
  }
};

const status = (state = emptySnackBar, action) => {
  switch (action.type) {
    case 'SNACKBAR_OPEN':
      return Object.assign({}, state, {
        shouldDisplay: true,
        content: {
          title: action.payload.title,
          message: action.payload.message,
          severity: action.payload.severity
        }
      });
    case 'SNACKBAR_CLOSE':
      return Object.assign({}, state, {
        shouldDisplay: false,
        content: {}
      });
    default:
      return state;
  }
};

export default status;
