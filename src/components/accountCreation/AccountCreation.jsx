import React from 'react';

import Button from '../Button';
import Overlay from '../overlay/Overlay';
import AccountCreationForm from '../../containers/accountCreationForm/AccountCreationForm';

class AccountCreation extends React.Component {
  constructor(props) {
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
        <AccountCreationForm onSubmit={onAccountCreationSuccess} />
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
