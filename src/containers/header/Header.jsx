import React from 'react';
import { connect } from 'react-redux';

import HeaderLogin from '../../components/login/HeaderLogin';

class Header extends React.Component {
  onLoginSuccess = () => {};

  render() {
    return <HeaderLogin onLoginSuccess={this.onLoginSuccess} />;
  }
}

export default Header;
