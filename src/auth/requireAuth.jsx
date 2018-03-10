import React from 'react';
import { withRouter } from 'react-router';

import authCore from './core';

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    checkAuth() {
      if (!authCore.loggedIn()) {
        // Currently commented, but will be used in the future...
        // const location = this.props.location;
        // const redirect = location.pathname + location.search;
        this.props.history.push(`/`);
      }
    }

    render() {
      return authCore.loggedIn() ? <Component {...this.props} /> : null;
    }
  }

  return withRouter(AuthenticatedComponent);
}
