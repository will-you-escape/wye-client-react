import React from 'react';

import HeaderLogin from '../../components/login/HeaderLogin';
import Logo from '../../components/logo/Logo';
import './header.css';

class Header extends React.Component {
  render() {
    const { onLoginSuccess } = this.props;
    return (
      <div className="main-header">
        <div className="main-header__element">
          <Logo />
        </div>
        <div className="main-header__element">
          <HeaderLogin onLoginSuccess={onLoginSuccess} />
        </div>
      </div>
    );
  }
}

export default Header;
