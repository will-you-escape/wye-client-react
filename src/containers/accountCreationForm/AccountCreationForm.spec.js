import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

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
      .simulate('change', { target: { value: 'my-email@wye.com' } });
    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.email.error')).to.have.length(0);
  });

  it('renders required error on pseudo field', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.pseudo.error').text()).to.equal('Required');
  });

  it('does not render any error on pseudo field if provided', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper
      .find('form input[name="pseudo"]')
      .simulate('change', { target: { value: 'my-pseudo' } });
    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.pseudo.error')).to.have.length(0);
  });

  it('renders required error on password field', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.password.error').text()).to.equal('Required');
  });

  it('does not render any error on password field if provided', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper
      .find('form input[name="password"]')
      .simulate('change', { target: { value: 'my-password' } });
    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.password.error')).to.have.length(0);
  });

  it('renders required error on password confirmation field', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.passwordConfirmation.error').text()).to.equal(
      'Required'
    );
  });

  it('renders error on password confirmation field if different than password', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper
      .find('form input[name="password"]')
      .simulate('change', { target: { value: 'my-password' } });
    wrapper
      .find('form input[name="passwordConfirmation"]')
      .simulate('change', { target: { value: 'a-different-password' } });
    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.passwordConfirmation.error').text()).to.equal(
      'Not identical to password'
    );
  });

  it('does not render any error on password confirmation field if provided and same as password', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    wrapper
      .find('form input[name="password"]')
      .simulate('change', { target: { value: 'my-password' } });
    wrapper
      .find('form input[name="passwordConfirmation"]')
      .simulate('change', { target: { value: 'my-password' } });
    wrapper.find('form button[type="submit"]').simulate('submit');

    expect(wrapper.find('.passwordConfirmation.error')).to.have.length(0);
  });

  it('triggers submit function if all fields filled', () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(
      <Provider store={store}>
        <AccountCreationForm onSubmit={onSubmitSpy} />
      </Provider>
    );

    wrapper
      .find('form input[name="email"]')
      .simulate('change', { target: { value: 'my-email@wye.com' } });
    wrapper
      .find('form input[name="pseudo"]')
      .simulate('change', { target: { value: 'my-pseudo' } });
    wrapper
      .find('form input[name="password"]')
      .simulate('change', { target: { value: 'my-password' } });
    wrapper
      .find('form input[name="passwordConfirmation"]')
      .simulate('change', { target: { value: 'my-password' } });
    wrapper.find('form button[type="submit"]').simulate('submit');

    sinon.assert.calledOnce(onSubmitSpy);
  });

  it('does not trigger submit function if not all fields filled', () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(
      <Provider store={store}>
        <AccountCreationForm onSubmit={onSubmitSpy} />
      </Provider>
    );

    wrapper.find('form button[type="submit"]').simulate('submit');

    sinon.assert.notCalled(onSubmitSpy);
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
