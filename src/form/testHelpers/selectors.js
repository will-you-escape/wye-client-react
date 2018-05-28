export function findFormInput(wrapper, inputName) {
  return wrapper.find(`form input[name="${inputName}"]`);
}

export function findFormSubmitButton(wrapper) {
  return wrapper.find('form button[type="submit"]');
}
