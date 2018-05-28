import { findFormInput, findFormSubmitButton } from './selectors';

export function setFormInputValue(wrapper, name, value) {
  findFormInput(wrapper, name).simulate('change', { target: { value: value } });
}

export function triggerFormSubmit(wrapper) {
  findFormSubmitButton(wrapper).simulate('submit');
}
