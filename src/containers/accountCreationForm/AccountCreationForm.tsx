import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import Button from "../../components/Button";
import InputField from "../../form/fields/InputField";
import { required } from "../../form/validators";

interface IhandleSubmitFn {
  (): void;
}

interface IProps {
  handleSubmit: IhandleSubmitFn;
}

interface IUserInformation {
  email: string;
  pseudo: string;
  password: string;
  passwordConfirmation: string;
}

class AccountCreationForm extends React.Component<
  InjectedFormProps<IUserInformation> & IProps,
  {}
> {
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
              type="password"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <Field
              name="passwordConfirmation"
              component={InputField}
              type="password"
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
    errors["passwordConfirmation"] = "Not identical to password";
  }
  return errors;
};

export default reduxForm<IUserInformation, IProps>({
  form: "accountCreation",
  validate
})(AccountCreationForm);
