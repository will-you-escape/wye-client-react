import React from "react";
import { expect } from "chai";
import { mount, ReactWrapper } from "enzyme";
import sinon from "sinon";

import Overlay from "./Overlay";

const emptyFn = () => {};

describe("<Overlay/>", () => {
  it("renders default Overlay", () => {
    mount(givenDefaultOverlay());
  });

  it("renders passed children without alteration", () => {
    const wrapper = mount(
      <Overlay onClose={emptyFn} displayOverlay={true}>
        <span className="span-child-testingonly">This is an overlay child</span>
      </Overlay>
    );
    expect(wrapper.find(".span-child-testingonly").text()).to.equal(
      "This is an overlay child"
    );
  });

  it('triggers "onClose" action when clicking on close sign', () => {
    const onCloseSpy = sinon.spy();
    const wrapper = mount(
      <Overlay onClose={onCloseSpy} displayOverlay={true} />
    );
    findCloseSign(wrapper).simulate("click");
    expect(onCloseSpy.called).to.equal(true);
  });

  function findCloseSign(wrapper: ReactWrapper) {
    return wrapper.find(".close-sign button");
  }
});

export function givenDefaultOverlay() {
  const onClose = () => alert("Closing overlay action");
  return (
    <Overlay onClose={onClose} displayOverlay={true}>
      <span>This is an overlay content</span>
    </Overlay>
  );
}
