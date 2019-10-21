import React from "react";
import { connect } from "react-redux";

interface IProps {
  loggedIn: boolean;
}

class AuthStatus extends React.Component<IProps, {}> {
  render() {
    const { loggedIn } = this.props;

    return (
      <div>
        <p>User logged in: {loggedIn ? "YES!" : "NO"}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.logged
  };
};

const ConnectedAuthStatus = connect(
  mapStateToProps,
  null
)(AuthStatus);

export default ConnectedAuthStatus;
