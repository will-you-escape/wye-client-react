import { ReactWrapper } from "enzyme";

export function findFormInput(wrapper: ReactWrapper, inputName: string) {
  return wrapper.find(`form input[name="${inputName}"]`);
}

export function findFormInputError(wrapper: ReactWrapper, inputName: string) {
  return wrapper.find(`.${inputName}.error`);
}

export function findFormSubmitButton(wrapper: ReactWrapper) {
  return wrapper.find('form button[type="submit"]');
}
