import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Email</label>
            <input type="text" name="email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" class="form-control col-md-6" name="password"/>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
