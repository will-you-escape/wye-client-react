import React from "react";
import { Dispatch } from "redux";

import { connect } from "react-redux";

import EscapeRoomSessionCreationForm, {
  IEscapeRoomSessionInformation
} from "./EscapeRoomSessionCreationForm";
import { createEscapeRoomSessionAction } from "./actions";

interface IEscapeRoomSessionCreationCallbackFn {
  (data: IEscapeRoomSessionInformation): void;
}

interface IProps {
  onEscapeRoomSessionCreation: IEscapeRoomSessionCreationCallbackFn;
}

class EscapeRoomSessionArea extends React.Component<IProps> {
  render() {
    const { onEscapeRoomSessionCreation } = this.props;

    return (
      <EscapeRoomSessionCreationForm onSubmit={onEscapeRoomSessionCreation} />
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onEscapeRoomSessionCreation: (data: IEscapeRoomSessionInformation) => {
      dispatch(createEscapeRoomSessionAction(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EscapeRoomSessionArea);
