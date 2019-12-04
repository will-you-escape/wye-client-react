import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import Button from "../components/Button";
import InputField from "../form/fields/InputField";
import { required } from "../form/validators";

export interface IEscapeRoomSessionInformation {
  name: string;
  playedDatetime: string;
  durationTime: string;
  numberOfHints: number;
}

class EscapeRoomSessionCreationForm extends React.Component<
  InjectedFormProps<IEscapeRoomSessionInformation>,
  {}
> {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              component={InputField}
              type="text"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="playedDatetime">Datetime</label>
            <Field
              name="playedDatetime"
              component={InputField}
              type="date"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="durationTime">Duration time</label>
            <Field
              name="durationTime"
              component={InputField}
              type="text"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="numberOfHints">Number of hints</label>
            <Field
              name="numberOfHints"
              component={InputField}
              type="integer"
              validate={[required]}
            />
          </div>
          <Button type="submit">Create session</Button>
        </form>
      </div>
    );
  }
}

export default reduxForm<IEscapeRoomSessionInformation>({
  form: "escapeRoomSessionCreation"
})(EscapeRoomSessionCreationForm);
