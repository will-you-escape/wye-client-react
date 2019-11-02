import React from "react";
import { Provider } from "react-redux";
import { expect } from "chai";
import { mount, ReactWrapper } from "enzyme";
import fetchMock from "fetch-mock";

import HomePage from "./HomePage";
import HeaderLogin from "./header/login/HeaderLogin";
import { wyeCreateStore } from "../store";
import {
  setFormInputValue,
  triggerFormSubmit
} from "../form/testHelpers/events";

describe("<HomePage/>", () => {
  describe("not logged", () => {
    it("contains login area", () => {
      const store = wyeCreateStore();
      const wrapper = mount(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      expect(findLoginArea(wrapper)).to.have.length(1);
    });

    it("contains WYE Homepage title", () => {
      const store = wyeCreateStore();
      const wrapper = mount(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      expect(wrapper.text()).to.contain("Your Escape Game Space");
    });

    function findLoginArea(wrapper: ReactWrapper) {
      return wrapper.find(HeaderLogin);
    }
  });
});

describe("<HomePage/> interactions", () => {
  let env: NodeJS.ProcessEnv;

  beforeEach(() => {
    env = process.env;
    process.env.REACT_APP_SERVER_ROOT_URL = "https://my.server.wye/";
  });

  afterEach(() => {
    fetchMock.restore();
    process.env = env;
  });

  describe("login form", () => {
    it("send data to server when data is valid", () => {
      const store = wyeCreateStore();
      const wrapper = mount(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      fetchMock.post("https://my.server.wye/graphql/", {});

      // Open the login form
      findLoginButton(wrapper).simulate("click");

      // Fill the form with valid data
      setFormInputValue(wrapper, "email", "my-email@wye.com");
      setFormInputValue(wrapper, "password", "my-password");
      triggerFormSubmit(wrapper);

      const fetchCall = firstFetchCall();

      expect(fetchCall).not.to.be.undefined;
      expect(getFetchCallURL(fetchCall)).to.equal(
        "https://my.server.wye/graphql/"
      );
    });

    it("does not send data to server when data is not valid", () => {
      const store = wyeCreateStore();
      const wrapper = mount(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      fetchMock.post("https://my.server.wye/graphql/", {});

      // Open the account creation form
      findLoginButton(wrapper).simulate("click");

      // Fill an incomplete form
      setFormInputValue(wrapper, "email", "my-email@wye.com");
      triggerFormSubmit(wrapper);

      const fetchCall = firstFetchCall();

      expect(fetchCall).to.be.undefined;
    });
  });

  function firstFetchCall() {
    return fetchMock.calls()[0];
  }

  function getFetchCallURL(mockedCall: fetchMock.MockCall) {
    // Mocked fetch-mock calls are a tuple, first one being the URL called.
    return mockedCall[0];
  }

  function findLoginButton(wrapper: ReactWrapper) {
    return wrapper.find(".header__login button");
  }
});

export function givenDefaultHomePage() {
  return <HomePage />;
}
