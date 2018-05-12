import React from 'react';

import Button from '../../components/Button';

class AccountCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pseudo: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangePseudo = event => {
    this.setState({
      pseudo: event.target.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleChangePasswordConfirmation = event => {
    this.setState({
      passwordConfirmation: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onAccountCreationSuccess } = this.props;

    onAccountCreationSuccess();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label>Pseudo</label>
            <input
              type="text"
              value={this.state.pseudo}
              onChange={this.handleChangePseudo}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div>
            <label>Password Confirmation</label>
            <input
              type="text"
              name="email"
              value={this.state.passwordConfirmation}
              onChange={this.handleChangePasswordConfirmation}
            />
          </div>
          <div>
            <Button>Sign Up</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default AccountCreationForm;
