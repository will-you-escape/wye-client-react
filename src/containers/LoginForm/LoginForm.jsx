import React from 'react';

import Button from '../../components/Button';
import auth from '../../auth/core';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onLoginSuccess } = this.props;

    auth
      .login(this.state.email, this.state.password)
      .then(response => {
        onLoginSuccess();
      })
      .catch(error => {
        alert(error);
      });
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
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
