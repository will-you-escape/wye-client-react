import React from 'react';

import AuthStatus from './AuthStatus';
import LoginForm from './LoginForm';

class Base extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AuthStatus />
        <LoginForm />
      </div>
    );
  }
}

export default Base;
