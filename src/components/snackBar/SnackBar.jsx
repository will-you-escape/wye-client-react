import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import classNames from 'classnames';

import Button from '../Button';
import CloseSign from '../overlay/CloseSign';
import { closeSnackBar } from './actions';

import './SnackBar.css';

class SnackBar extends React.Component {
  renderSnackBarContent() {
    const { notification, onClose } = this.props;

    return (
      <div className={classNames('snackbar', notification.severity)}>
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

const mapStateToProps = state => {
  return {
    shouldDisplay: state.snackBar.shouldDisplay,
    notification: state.snackBar.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => {
      dispatch(closeSnackBar());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
