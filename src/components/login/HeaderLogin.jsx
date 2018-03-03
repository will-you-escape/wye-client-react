import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import LoginForm from '../../containers/LoginForm';

class HeaderLogin extends React.Component {
  getInitialState = () => {
    return {
      overlayDisplay: false
    };
  };

  onLoginClick = () => {
    this.setState({ overlayDisplay: true });
  };

  onClose = () => {
    this.setState({ overlayDisplay: false });
  };

  render() {
    const { onLoginClick, onLoginSuccess } = this.props;

    return (
      <div class="header__login">
        <span>Already have an account?</span>
        <Button onClick={onLoginClick}>Login</Button>
        {this.state.overlayDisplay ? (
          <Overlay onClose={this.onClose}>
            <LoginForm onLoginSuccess={onLoginSuccess} />
          </Overlay>
        ) : null}
      </div>
    );
  }
}
