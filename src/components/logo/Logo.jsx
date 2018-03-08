import React from 'react';
import { connect } from 'react-redux';

import logo from './wye_logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div className="main-logo">
        <img src={logo} alt="Logo" />
      </div>
    );
  }
}

export default Logo;
