import React from "react";
import { Dispatch } from "redux";

import { connect } from "react-redux";

import EscapeRoomSessionCreationForm, {
  IEscapeRoomSessionInformation
} from "./EscapeRoomSessionCreationForm";
import { createEscapeRoomSessionAction } from "./actions";

interface IProps {
  sessions: ;
}

class EscapeRoomSessionListing extends React.Component<IProps> {
  render() {
    const { sessions } = this.props;

    return sessions.map(session =>
      <EscapeRoomSession session={session} />
    );
  }
}

export default connect(EscapeRoomSessionListing);
