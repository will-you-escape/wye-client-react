import React from "react";
import { Dispatch } from "redux";

import { connect } from "react-redux";

import EscapeRoomSessionCreationForm, {
  IEscapeRoomSessionInformation
} from "./EscapeRoomSessionCreationForm";
import EscapeRoomSessionListing from "./EscapeRoomSessionListing";
import { fetchEscapeRoomSessionsAction } from "./actions";
import { IApplicationState } from "../reducers";

interface IReduxStateProps {
  sessions: IEscapeRoomSession;
}

interface IEscapeRoomSessionCreationCallbackFn {
  (data: IEscapeRoomSessionInformation): void;
}

interface IProps {
  onEscapeRoomSessionCreation: IEscapeRoomSessionCreationCallbackFn;
}

class EscapeRoomSessionArea extends React.Component<IProps> {
  render() {
    const { onEscapeRoomSessionCreation, sessions } = this.props;

    return (
      <React.Fragment>
        <EscapeRoomSessionCreationForm onSubmit={onEscapeRoomSessionCreation} />
        <EscapeRoomSessionListing
          sessions={sessions}
        ></EscapeRoomSessionListing>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IApplicationState): IReduxStateProps => {
  return {
    sessions: state.sessions
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchSessions: () => {
      dispatch(fetchEscapeRoomSessionsAction());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EscapeRoomSessionArea);
