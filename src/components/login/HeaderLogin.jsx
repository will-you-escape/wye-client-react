import React from 'react';

import Button from '../Button';
import Overlay from '../overlay/Overlay';
import LoginForm from '../../containers/LoginForm';

class HeaderLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayDisplay: false
    };
  }

  onLoginClick = () => {
    this.setState({ overlayDisplay: true });
  };

  onClose = () => {
    this.setState({ overlayDisplay: false });
  };

  renderOverlay = () => {
    const { onLoginSuccess } = this.props;
    const displayOverlay = this.state.overlayDisplay;

    return (
      <Overlay onClose={this.onClose} displayOverlay={displayOverlay}>
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </Overlay>
    );
  };

  render() {
    const overlay = this.renderOverlay();

    return (
      <div className="header__login">
        <span className="header__login--message">Already have an account?</span>
        <Button onClick={this.onLoginClick}>Login</Button>
        {overlay}
      </div>
    );
  }
}

export default HeaderLogin;
