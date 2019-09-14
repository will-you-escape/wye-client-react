import React from 'react';

class InputField extends React.Component {
  // inspired from https://redux-form.com/7.3.0/examples/fieldlevelvalidation/

  render() {
    const {
      input,
      label,
      type,
      meta: { touched, error, warning }
    } = this.props;

    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && (
              <span className={'error ' + input.name}>{error}</span>
            )) ||
              (warning && (
                <span className={'warning ' + input.name}>{warning}</span>
              )))}
        </div>
      </div>
    );
  }
}

export default InputField;
