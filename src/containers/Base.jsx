import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthStatus from './AuthStatus';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

class Base extends React.Component {
  render() {
    const { loggedIn } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AuthStatus />
        {loggedIn ? (
          <React.Fragment>
            <Link to="/my-account">My account</Link>
            <LogoutForm />
          </React.Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.logged
  };
};

export default connect(mapStateToProps)(Base);
