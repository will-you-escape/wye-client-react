import React from "react";
import ReactDOM from "react-dom";
import { Dispatch } from "redux";

import { connect } from "react-redux";
import classNames from "classnames";

import Button from "../Button";
import CloseSign, { IonCloseFn } from "../overlay/CloseSign";
import { closeSnackBar } from "./actions";
import { IApplicationState } from "../../reducers";

import "./SnackBar.css";

interface INotification {
  severity: string;
  title: string;
  message: string;
}

interface IProps {
  notification: INotification;
  onClose: IonCloseFn;
  shouldDisplay: boolean;
}

class SnackBar extends React.Component<IProps, {}> {
  renderSnackBarContent() {
    const { notification, onClose } = this.props;

    return (
      <div className={classNames("snackbar", notification.severity)}>
        <CloseSign onClose={onClose} />
        <h1 className="snackbar__title">{notification.title}</h1>
        <p className="snackbar__message">{notification.message}</p>
        <Button onClick={onClose}>Got it!</Button>
      </div>
    );
  }

  render() {
    const { shouldDisplay } = this.props;
    const snackBarRootNode = document.body;

    return shouldDisplay
      ? ReactDOM.createPortal(this.renderSnackBarContent(), snackBarRootNode)
      : null;
  }
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    shouldDisplay: state.snackBar.shouldDisplay,
    notification: state.snackBar.content
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onClose: () => {
      dispatch(closeSnackBar());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackBar);
