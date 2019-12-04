import React from "react";
import { Provider } from "react-redux";
import { expect } from "chai";
import { mount } from "enzyme";
import sinon from "sinon";

import { wyeCreateStore } from "../store";
import EscapeRoomSessionCreationForm from "./EscapeRoomSessionCreationForm";
import { findFormInputError } from "../form/testHelpers/selectors";
import {
  setFormInputValue,
  triggerFormSubmit
} from "../form/testHelpers/events";

interface IonSubmitEmpty {
  (): void;
}

const initialState = undefined;
let store = wyeCreateStore(initialState);

describe("<EscapeRoomSessionCreationForm/>", () => {
  beforeEach(() => {
    store = wyeCreateStore(initialState);
  });

  it("renders default EscapeRoomSessionCreationForm with expected number of fields", () => {
    const wrapper = mount(givenDefaultEscapeRoomSessionCreationForm());

    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find("form input")).to.have.length(4);
  });

  it("renders required error on all required fields", () => {
    const wrapper = mount(givenDefaultEscapeRoomSessionCreationForm());

    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "name").text()).to.equal("Required");
    expect(findFormInputError(wrapper, "playedDatetime").text()).to.equal(
      "Required"
    );
    expect(findFormInputError(wrapper, "durationTime").text()).to.equal(
      "Required"
    );
    expect(findFormInputError(wrapper, "numberOfHints").text()).to.equal(
      "Required"
    );
  });

  it("does not render any error on name field if provided", () => {
    const wrapper = mount(givenDefaultEscapeRoomSessionCreationForm());

    setFormInputValue(wrapper, "name", "Escape YourSelf");
    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "name")).to.have.length(0);
  });

  it("does not render any error on playedDatetime field if provided", () => {
    const wrapper = mount(givenDefaultEscapeRoomSessionCreationForm());

    setFormInputValue(wrapper, "playedDatetime", "2018-02-01T12:32:00");
    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "playedDatetime")).to.have.length(0);
  });

  it("does not render any error on Time field if provided", () => {
    const wrapper = mount(givenDefaultEscapeRoomSessionCreationForm());

    setFormInputValue(wrapper, "durationTime", "1000");

    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "durationTime")).to.have.length(0);
  });

  it("does not render any error on numberOfHints field if provided", () => {
    const wrapper = mount(givenDefaultEscapeRoomSessionCreationForm());

    setFormInputValue(wrapper, "numberOfHints", "5");

    triggerFormSubmit(wrapper);

    expect(findFormInputError(wrapper, "numberOfHints")).to.have.length(0);
  });

  it("triggers submit function if all fields filled", () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(
      givenDefaultEscapeRoomSessionCreationForm(onSubmitSpy)
    );

    setFormInputValue(wrapper, "name", "Escape YourSelf");
    setFormInputValue(wrapper, "playedDatetime", "2018-02-01T12:32:00");
    setFormInputValue(wrapper, "durationTime", "1000");
    setFormInputValue(wrapper, "numberOfHints", "5");
    triggerFormSubmit(wrapper);

    sinon.assert.calledOnce(onSubmitSpy);
  });

  it("does not trigger submit function if not all fields filled", () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(
      givenDefaultEscapeRoomSessionCreationForm(onSubmitSpy)
    );

    triggerFormSubmit(wrapper);

    sinon.assert.notCalled(onSubmitSpy);
  });
});

export function givenDefaultEscapeRoomSessionCreationForm(
  onSubmitCallback?: IonSubmitEmpty
) {
  function onSubmitEmpty() {}
  const onSubmit = onSubmitCallback || onSubmitEmpty;

  return (
    <Provider store={store}>
      <EscapeRoomSessionCreationForm onSubmit={onSubmit} />
    </Provider>
  );
}
