import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IApplicationState } from "../reducers";

interface IStateToProps {
  loggedIn: boolean;
}

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component<
    IStateToProps & RouteComponentProps,
    {}
  > {
    componentDidMount() {
      this.checkAuth();
    }

    checkAuth() {
      const { loggedIn } = this.props;

      if (!loggedIn) {
        // Currently commented, but will be used in the future...
        // const location = this.props.location;
        // const redirect = location.pathname + location.search;
        this.props.history.push(`/`);
      }
    }

    render() {
      const { loggedIn } = this.props;
      return loggedIn ? <Component {...this.props} /> : null;
    }
  }

  const mapStateToProps = (state: IApplicationState): IStateToProps => {
    return {
      loggedIn: state.auth.logged
    };
  };

  return withRouter(connect(mapStateToProps)(AuthenticatedComponent));
}
