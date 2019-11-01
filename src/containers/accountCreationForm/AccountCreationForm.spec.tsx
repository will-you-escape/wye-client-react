import React from "react";
import { Provider } from "react-redux";
import { expect } from "chai";
import { mount } from "enzyme";
import sinon from "sinon";

import { wyeCreateStore } from "../../store";
import AccountCreationForm from "./AccountCreationForm";
import { findFormInputError } from "../../form/testHelpers/selectors";
import {
  setFormInputValue,
  triggerFormSubmit
} from "../../form/testHelpers/events";

interface IonSubmitEmpty {
  (): void;
}

const initialState = undefined;
let store = wyeCreateStore(initialState);

describe("<AccountCreationForm/>", () => {
  beforeEach(() => {
    store = wyeCreateStore(initialState);
  });

  it("renders default AccountCreationForm with expected number of fields", () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find("form input")).to.have.length(4);
  });

  it("renders required error on all required fields", () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "email").text()).to.equal("Required");
    expect(findFormInputError(wrapper, "pseudo").text()).to.equal("Required");
    expect(findFormInputError(wrapper, "password").text()).to.equal("Required");
    expect(findFormInputError(wrapper, "passwordConfirmation").text()).to.equal(
      "Required"
    );
  });

  it("does not render any error on email field if provided", () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, "email", "my-email@wye.com");
    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "email")).to.have.length(0);
  });

  it("does not render any error on pseudo field if provided", () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, "pseudo", "my-pseudo");
    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "pseudo")).to.have.length(0);
  });

  it("does not render any error on password field if provided", () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, "password", "my-password");

    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "password")).to.have.length(0);
  });

  it("renders error on password confirmation field if different than password", () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, "password", "my-password");
    setFormInputValue(wrapper, "passwordConfirmation", "a-different-password");
    triggerFormSubmit(wrapper);

    expect(wrapper.find(".passwordConfirmation.error").text()).to.equal(
      "Not identical to password"
    );
  });

  it("does not render any error on password confirmation field if provided and same as password", () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, "password", "my-password");
    setFormInputValue(wrapper, "passwordConfirmation", "my-password");
    triggerFormSubmit(wrapper);

    expect(wrapper.find(".passwordConfirmation.error")).to.have.length(0);
  });

  it("triggers submit function if all fields filled", () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(givenDefaultAccountCreationForm(onSubmitSpy));

    setFormInputValue(wrapper, "email", "my-email@wye.com");
    setFormInputValue(wrapper, "pseudo", "my-pseudo");
    setFormInputValue(wrapper, "password", "my-password");
    setFormInputValue(wrapper, "passwordConfirmation", "my-password");
    triggerFormSubmit(wrapper);

    sinon.assert.calledOnce(onSubmitSpy);
  });

  it("does not trigger submit function if not all fields filled", () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(givenDefaultAccountCreationForm(onSubmitSpy));

    triggerFormSubmit(wrapper);

    sinon.assert.notCalled(onSubmitSpy);
  });
});

export function givenDefaultAccountCreationForm(
  onSubmitCallback?: IonSubmitEmpty
) {
  function onSubmitEmpty() {}
  const onSubmit = onSubmitCallback || onSubmitEmpty;

  return (
    <Provider store={store}>
      <AccountCreationForm onSubmit={onSubmit} />
    </Provider>
  );
}
