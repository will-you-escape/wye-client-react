import { ReactWrapper } from "enzyme";
import { findFormInput, findFormSubmitButton } from "./selectors";

export function setFormInputValue(
  wrapper: ReactWrapper,
  name: string,
  value: string
) {
  findFormInput(wrapper, name).simulate("change", { target: { value: value } });
}

export function triggerFormSubmit(wrapper: ReactWrapper) {
  findFormSubmitButton(wrapper).simulate("submit");
}
