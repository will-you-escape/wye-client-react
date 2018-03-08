import React from 'react';
import { connect } from 'react-redux';

import HeaderLogin from '../../components/login/HeaderLogin';
import Logo from '../../components/logo/Logo';
import './header.css';

class Header extends React.Component {
  onLoginSuccess = () => {};

  render() {
    return (
      <div className="main-header">
        <Logo />
        <HeaderLogin onLoginSuccess={this.onLoginSuccess} />
      </div>
    );
  }
}

export default Header;
