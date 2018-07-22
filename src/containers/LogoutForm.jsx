import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import auth from '../auth/core';
import { logOutUser } from '../reducers/actions';

class LogoutForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const { dispatchLogOutUser } = this.props;
    auth
      .logout()
      .then(response => {
        dispatchLogOutUser();
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
            <Button>Logout</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogOutUser: () => {
      dispatch(logOutUser());
    }
  };
};

export default connect(null, mapDispatchToProps)(LogoutForm);
