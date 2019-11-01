import React from "react";
import { Provider } from "react-redux";
import { expect } from "chai";
import { mount } from "enzyme";
import sinon from "sinon";

import LoginForm from "./LoginForm";
import { wyeCreateStore } from "../../store";
import { findFormInputError } from "../../form/testHelpers/selectors";
import {
  setFormInputValue,
  triggerFormSubmit
} from "../../form/testHelpers/events";

const initialState = undefined;
let store;

describe("<LoginForm/>", () => {
  beforeEach(() => {
    store = wyeCreateStore(initialState);
  });

  it("renders default LoginForm with expected number of fields", () => {
    const wrapper = mount(givenDefaultLoginForm());

    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find("form input")).to.have.length(2);
  });

  it("renders required error on all required fields", () => {
    const wrapper = mount(givenDefaultLoginForm());

    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "email").text()).to.equal("Required");
    expect(findFormInputError(wrapper, "password").text()).to.equal("Required");
  });

  it("does not render any error on email field if provided", () => {
    const wrapper = mount(givenDefaultLoginForm());

    setFormInputValue(wrapper, "email", "my-email@wye.com");
    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "email")).to.have.length(0);
  });

  it("does not render any error on password field if provided", () => {
    const wrapper = mount(givenDefaultLoginForm());

    setFormInputValue(wrapper, "password", "my-password");
    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "password")).to.have.length(0);
  });

  it("triggers submit function if all fields filled", () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(givenDefaultLoginForm(onSubmitSpy));

    setFormInputValue(wrapper, "email", "my-email@wye.com");
    setFormInputValue(wrapper, "password", "my-password");
    triggerFormSubmit(wrapper);

    sinon.assert.calledOnce(onSubmitSpy);
  });

  it("does not trigger submit function if not all fields filled", () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(givenDefaultLoginForm(onSubmitSpy));

    triggerFormSubmit(wrapper);

    sinon.assert.notCalled(onSubmitSpy);
  });
});

interface IOnSubmitCallback {
  (any): any;
}

export function givenDefaultLoginForm(onSubmitCallback?: IOnSubmitCallback) {
  function onSubmitEmpty() {}
  const onSubmit = onSubmitCallback || onSubmitEmpty;

  return (
    <Provider store={store}>
      <LoginForm onSubmit={onSubmit} />
    </Provider>
  );
}
