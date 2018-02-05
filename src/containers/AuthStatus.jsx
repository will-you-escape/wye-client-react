import React from 'react';
import { connect } from 'react-redux';

class AuthStatus extends React.Component {
  render() {
    const { loggedIn } = this.props;

    return (
      <div>
        <p>User logged in: {loggedIn ? 'YES!' : 'NO'}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.logged
  };
};

const ConnectedAuthStatus = connect(mapStateToProps, null)(AuthStatus);

export default ConnectedAuthStatus;
