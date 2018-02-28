import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import wyeReducers from './reducers/index';
import { initApp } from './actions';

import { DEBUG_TOOLS } from './debug';

import Base from './containers/Base';
import MyAccount from './containers/MyAccount';

import requireAuth from './auth/requireAuth';

let store = createStore(wyeReducers, DEBUG_TOOLS);
store.dispatch(initApp());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Base} name="homepage" />
            <Route path="/my-account" component={requireAuth(MyAccount)} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}
export default App;
