export function findFormInput(wrapper, inputName) {
  return wrapper.find(`form input[name="${inputName}"]`);
}

export function findFormInputError(wrapper, inputName) {
  return wrapper.find(`.${inputName}.error`);
}

export function findFormSubmitButton(wrapper) {
  return wrapper.find('form button[type="submit"]');
}
