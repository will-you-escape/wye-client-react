interface ISnackBarStateContent {
  title: string;
  message: string;
  severity: string;
}

type PayloadType = {
  title: string;
  message: string;
  severity: string;
};

interface ISnackBarAction {
  type: string;
  payload: PayloadType;
}

export interface ISnackBarState {
  readonly shouldDisplay: boolean;
  readonly content: ISnackBarStateContent;
}

const initialSnackBar: ISnackBarState = {
  shouldDisplay: false,
  content: {
    title: "",
    message: "",
    severity: ""
  }
};

const status = (
  state: ISnackBarState = initialSnackBar,
  action: ISnackBarAction
): ISnackBarState => {
  switch (action.type) {
    case "SNACKBAR_OPEN":
      return Object.assign({}, state, {
        shouldDisplay: true,
        content: {
          title: action.payload.title,
          message: action.payload.message,
          severity: action.payload.severity
        }
      });
    case "SNACKBAR_CLOSE":
      return Object.assign({}, state, {
        shouldDisplay: false,
        content: {}
      });
    default:
      return state;
  }
};

export default status;
