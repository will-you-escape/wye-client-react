import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import Button from "../../components/Button";
import InputField from "../../form/fields/InputField";
import { required } from "../../form/validators";

export interface IhandleSubmitFn {
  (): void;
}

interface IProps {
  handleSubmit: IhandleSubmitFn;
}

interface IUserLoginInformation {
  email: string;
  password: string;
}

class LoginForm extends React.Component<
  InjectedFormProps<IUserLoginInformation> & IProps
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
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              component={InputField}
              type="password"
              validate={[required]}
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }
}

export default reduxForm<IUserLoginInformation, IProps>({
  form: "login"
})(LoginForm);
