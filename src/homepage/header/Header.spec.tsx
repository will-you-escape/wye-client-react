import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { Link, MemoryRouter } from "react-router-dom";

import Header from "./Header";
import Logo from "../../components/logo/Logo";
import HeaderLogin from "./login/HeaderLogin";

const emptyFn = () => {};

describe("<Header/>", () => {
  it("renders default Header", () => {
    mount(givenDefaultHeader());
  });

  it("contains WYE Logo", () => {
    const wrapper = mount(givenDefaultHeader());
    expect(findWYELogo(wrapper)).to.have.length(1);
  });

  it("contains login area when user not logged", () => {
    const wrapper = mount(givenDefaultHeader());
    expect(findLoginArea(wrapper)).to.have.length(1);
  });

  it("contains link to dashboard when user is logged", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header loggedIn={true} onLoginSuccess={emptyFn} />
      </MemoryRouter>
    );
    expect(findDashboardLink(wrapper).prop("to")).to.equal("/my-account");
  });

  function findWYELogo(wrapper) {
    return wrapper.find(Logo);
  }

  function findLoginArea(wrapper) {
    return wrapper.find(HeaderLogin);
  }

  function findDashboardLink(wrapper) {
    return wrapper.find(Link);
  }
});

export function givenDefaultHeader() {
  return <Header loggedIn={false} onLoginSuccess={emptyFn} />;
}
