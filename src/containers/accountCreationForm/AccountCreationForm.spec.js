import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import AccountCreationForm from './AccountCreationForm';

const initialState = {};
const mockStore = configureStore();
let store;

describe('<AccountCreationForm/>', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders default AccountCreationForm with expected number of fields', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());
    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find('form input')).to.have.length(4);
  });
});

export function givenDefaultAccountCreationForm() {
  return (
    <Provider store={store}>
      <AccountCreationForm />
    </Provider>
  );
}
