import React from 'react';
import Button from '../components/Button';
import auth from '../auth/core';

class LogoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    auth
      .logout()
      .then(response => {
        alert('logout sucessful!');
      })
      .catch(error => {
        alert('logout problem');
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Button>Logout</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogoutForm;
