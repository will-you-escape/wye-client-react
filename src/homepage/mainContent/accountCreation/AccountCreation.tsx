import React from "react";

import Button from "../../../components/Button";
import Overlay from "../../../components/overlay/Overlay";
import AccountCreationForm from "../../../containers/accountCreationForm/AccountCreationForm";

interface ICallbackFn {
  (): void;
}

interface IProps {
  onAccountCreationSuccess: ICallbackFn;
}

interface ILocalStateProps {
  overlayDisplay: boolean;
}

class AccountCreation extends React.Component<IProps, ILocalStateProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      overlayDisplay: false
    };
  }

  onAccountCreationClick = () => {
    this.setState({ overlayDisplay: true });
  };

  onClose = () => {
    this.setState({ overlayDisplay: false });
  };

  renderOverlay = () => {
    const { onAccountCreationSuccess } = this.props;
    const displayOverlay = this.state.overlayDisplay;

    return (
      <Overlay onClose={this.onClose} displayOverlay={displayOverlay}>
        <AccountCreationForm handleSubmit={onAccountCreationSuccess} />
      </Overlay>
    );
  };

  render() {
    const overlay = this.renderOverlay();

    return (
      <div className="account__creation">
        <Button onClick={this.onAccountCreationClick}>Sign Up</Button>
        {overlay}
      </div>
    );
  }
}

export default AccountCreation;
