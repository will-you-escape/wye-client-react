import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogin from './login/HeaderLogin';
import Logo from '../../components/logo/Logo';
import './header.css';

class Header extends React.Component {
  render() {
    const { onLoginSuccess, loggedIn } = this.props;
    return (
      <div className="main-header">
        <div className="main-header__element">
          <Logo />
        </div>
        <div className="main-header__element">
          {loggedIn ? (
            <Link to={'/my-account'}>My Dashboard</Link>
          ) : (
            <HeaderLogin onLoginSuccess={onLoginSuccess} />
          )}
        </div>
      </div>
    );
  }
}

export default Header;
