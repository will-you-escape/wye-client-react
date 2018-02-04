import React from 'react';
import { connect } from 'react-redux';

class AuthStatus extends React.Component {
  render() {
    return (
      <div>
        <p>User logged in: {this.props.loggedIn}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.userLogged
  };
};

const ConnectedAuthStatus = connect(mapStateToProps, null)(AuthStatus);

export default ConnectedAuthStatus;
