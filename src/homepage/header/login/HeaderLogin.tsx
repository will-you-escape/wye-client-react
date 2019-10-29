import React from "react";

import Button from "../../../components/Button";
import Overlay from "../../../components/overlay/Overlay";
import LoginForm from "../../../containers/LoginForm";

interface ICallbackFn {
  (): any;
}

interface IProps {
  onLoginSuccess: ICallbackFn;
}

interface ILocalState {
  overlayDisplay: boolean;
}

class HeaderLogin extends React.Component<IProps, ILocalState> {
  constructor(props: IProps) {
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
        <LoginForm onSubmit={onLoginSuccess} />
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
