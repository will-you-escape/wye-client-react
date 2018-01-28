import React from 'react';
import Button from '../components/Button';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div class="form-group">
            <Button>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
