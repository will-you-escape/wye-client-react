import React from 'react';
import { Link } from 'react-router-dom';

import LogoutForm from './LogoutForm';

class MyAccount extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My account!</h1>
        </header>
        <Link to="/">Homepage</Link>
        <LogoutForm />
      </div>
    );
  }
}

export default MyAccount;
