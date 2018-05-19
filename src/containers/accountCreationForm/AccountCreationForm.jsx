import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../components/Button';

class AccountCreationForm extends React.Component {
  customHandleSubmit = event => {
    const { handleSubmit, onAccountCreationSuccess } = this.props;

    event.preventDefault();
    handleSubmit();
    onAccountCreationSuccess();
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <Field name="pseudo" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <Field name="passwordConfirmation" component="input" type="text" />
          </div>
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    );
  }
}

AccountCreationForm = reduxForm({
  form: 'accountCreation'
})(AccountCreationForm);

export default AccountCreationForm;
