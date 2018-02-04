import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import auth from '../auth/core';
import { logUser } from '../actions/index';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { logUser } = this.props;

    auth
      .login(this.state.email, this.state.password)
      .then(response => {
        alert('auth sucessful!');
        logUser();
      })
      .catch(error => {
        alert('auth problem');
      });
  }

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

const mapDispatchToProps = dispatch => {
  return {
    logUser: () => {
      dispatch(logUser());
    }
  };
};

const ConnectedLoginForm = connect(null, mapDispatchToProps)(LoginForm);

export default ConnectedLoginForm;
