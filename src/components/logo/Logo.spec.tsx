import React from "react";
import { expect } from "chai";
import { mount, ReactWrapper } from "enzyme";

import Logo from "./Logo";

describe("<Logo/>", () => {
  it("renders default Logo", () => {
    mount(givenDefaultLogo());
  });

  it("renders expected image Logo", () => {
    const wrapper = mount(givenDefaultLogo());
    expect(findImage(wrapper).prop("src")).to.equal("wye_logo.png");
  });

  function findImage(wrapper: ReactWrapper) {
    return wrapper.find("img");
  }
});

export function givenDefaultLogo() {
  return <Logo />;
}
