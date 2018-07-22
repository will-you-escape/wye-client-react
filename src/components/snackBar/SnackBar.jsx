import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import CloseSign from '../overlay/CloseSign';
import { closeSnackBar } from './actions';

class SnackBar extends React.Component {
  render() {
    const { shouldDisplay, notification, onClose } = this.props;

    return shouldDisplay ? (
      <div className="snackbar">
        <CloseSign onClose={onClose} />
        <h1 className="snackbar__title">{notification.title}</h1>
        <p className="snackbar__message">{notification.message}</p>
        <Button onClick={onClose}>Got it!</Button>
      </div>
    ) : null;
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
