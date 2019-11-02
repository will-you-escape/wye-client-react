import React from "react";
import { Store } from "redux";
import { expect } from "chai";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";

import { wyeCreateStore } from "../../store";
import SnackBar from "./SnackBar";

describe("<SnackBar/>", () => {
  it("renders SnackBar when notification", () => {
    const initialState = {
      snackBar: {
        shouldDisplay: true,
        content: {
          title: "Internal server error",
          message:
            "An internal server error occured. Please retry again later.",
          severity: "error"
        }
      }
    };
    let store = wyeCreateStore(initialState);
    const wrapper = mount(givenDefaultSnackBar(store));

    expect(findSnackBarTitle(wrapper).text()).to.have.string(
      "Internal server error"
    );
    expect(findSnackBarMessage(wrapper).text()).to.have.string(
      "An internal server error occured. Please retry again later."
    );
  });

  it("does not render SnackBar if no notification", () => {
    let store = wyeCreateStore();
    const wrapper = mount(givenDefaultSnackBar(store));

    expect(findSnackBarTitle(wrapper).exists()).to.be.false;
    expect(findSnackBarMessage(wrapper).exists()).to.be.false;
  });

  it("does not render SnackBar if notification should not be displayed", () => {
    const initialState = {
      snackBar: {
        shouldDisplay: false,
        content: {
          title: "Internal server error",
          message:
            "An internal server error occured. Please retry again later.",
          severity: "error"
        }
      }
    };
    let store = wyeCreateStore(initialState);
    const wrapper = mount(givenDefaultSnackBar(store));

    expect(findSnackBarTitle(wrapper).exists()).to.be.false;
    expect(findSnackBarMessage(wrapper).exists()).to.be.false;
  });

  function findSnackBarTitle(wrapper: ReactWrapper) {
    return wrapper.find(".snackbar__title");
  }

  function findSnackBarMessage(wrapper: ReactWrapper) {
    return wrapper.find(".snackbar__message");
  }
});

export function givenDefaultSnackBar(store: Store) {
  return (
    <Provider store={store}>
      <SnackBar />
    </Provider>
  );
}
