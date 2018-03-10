import React from 'react';
import { connect } from 'react-redux';

import Header from './header/Header';

class Base extends React.Component {
  render() {
    const { loggedIn } = this.props;

    return (
      <div className="app">
        <Header loggedIn={loggedIn} />
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
