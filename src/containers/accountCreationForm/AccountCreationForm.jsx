import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../components/Button';
import InputField from '../../form/fields/InputField';
import { required } from '../../form/validators';

class AccountCreationForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              component={InputField}
              type="email"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <Field
              name="pseudo"
              component={InputField}
              type="text"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              component={InputField}
              type="text"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <Field
              name="passwordConfirmation"
              component={InputField}
              type="text"
              validate={[required]}
            />
          </div>
          <Button type="submit">Create account</Button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Not identical to pasword';
  }
  return errors;
};

AccountCreationForm = reduxForm({
  form: 'accountCreation',
  validate
})(AccountCreationForm);

export default AccountCreationForm;
