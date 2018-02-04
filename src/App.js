import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import wyeReducers from './reducers/index';

import AuthStatus from './containers/AuthStatus';
import LoginForm from './containers/LoginForm';
import LogoutForm from './containers/LogoutForm';

let store = createStore(wyeReducers, { userLogged: false });

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <AuthStatus />
          <LoginForm />
          <LogoutForm />
        </div>
      </Provider>
    );
  }
}
export default App;
