import React from 'react';

import LogoutForm from './LogoutForm';

class Base extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My account!</h1>
        </header>
        <LogoutForm />
      </div>
    );
  }
}

export default Base;
