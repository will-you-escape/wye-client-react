import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { initApp } from './actions';

import HomePage from './homepage/HomePage';
import MyAccount from './containers/MyAccount';

import requireAuth from './auth/requireAuth';

import { wyeCreateStore } from './store';

let store = wyeCreateStore();
store.dispatch(initApp());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={HomePage} name="homepage" />
            <Route path="/my-account" component={requireAuth(MyAccount)} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}
export default App;
