import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { wyeCreateStore } from '../../store';
import AccountCreationForm from './AccountCreationForm';

const initialState = {};
let store = wyeCreateStore(initialState);

describe('<AccountCreationForm/>', () => {
  beforeEach(() => {
    store = wyeCreateStore(initialState);
  });

  it('renders default AccountCreationForm with expected number of fields', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find('form input')).to.have.length(4);
  });

  it('renders required error on email field', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.email.error').text()).to.equal('Required');
  });

  it('does not render any error on email field if provided', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper
      .find('form input[name="email"]')
      .simulate('change', { target: { value: 'email@wye.com' } });
    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.email.error')).to.have.length(0);
  });
});

export function givenDefaultAccountCreationForm() {
  function onSubmit() {}
  return (
    <Provider store={store}>
      <AccountCreationForm onSubmit={onSubmit} />
    </Provider>
  );
}
