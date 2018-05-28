import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { wyeCreateStore } from '../../store';
import AccountCreationForm from './AccountCreationForm';
import { findFormInput } from '../../form/testHelpers/selectors';
import {
  setFormInputValue,
  triggerFormSubmit
} from '../../form/testHelpers/events';

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

    triggerFormSubmit(wrapper);

    expect(wrapper.find('.email.error').text()).to.equal('Required');
  });

  it('does not render any error on email field if provided', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, 'email', 'my-email@wye.com');
    triggerFormSubmit(wrapper);

    expect(wrapper.find('.email.error')).to.have.length(0);
  });

  it('renders required error on pseudo field', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    triggerFormSubmit(wrapper);

    expect(wrapper.find('.pseudo.error').text()).to.equal('Required');
  });

  it('does not render any error on pseudo field if provided', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, 'pseudo', 'my-pseudo');
    triggerFormSubmit(wrapper);

    expect(wrapper.find('.pseudo.error')).to.have.length(0);
  });

  it('renders required error on password field', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    triggerFormSubmit(wrapper);

    expect(wrapper.find('.password.error').text()).to.equal('Required');
  });

  it('does not render any error on password field if provided', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, 'password', 'my-password');

    triggerFormSubmit(wrapper);

    expect(wrapper.find('.password.error')).to.have.length(0);
  });

  it('renders required error on password confirmation field', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    triggerFormSubmit(wrapper);

    expect(wrapper.find('.passwordConfirmation.error').text()).to.equal(
      'Required'
    );
  });

  it('renders error on password confirmation field if different than password', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, 'password', 'my-password');
    setFormInputValue(wrapper, 'passwordConfirmation', 'a-different-password');
    triggerFormSubmit(wrapper);

    expect(wrapper.find('.passwordConfirmation.error').text()).to.equal(
      'Not identical to password'
    );
  });

  it('does not render any error on password confirmation field if provided and same as password', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());

    setFormInputValue(wrapper, 'password', 'my-password');
    setFormInputValue(wrapper, 'passwordConfirmation', 'my-password');
    triggerFormSubmit(wrapper);

    expect(wrapper.find('.passwordConfirmation.error')).to.have.length(0);
  });

  it('triggers submit function if all fields filled', () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(
      <Provider store={store}>
        <AccountCreationForm onSubmit={onSubmitSpy} />
      </Provider>
    );

    setFormInputValue(wrapper, 'email', 'my-email@wye.com');
    setFormInputValue(wrapper, 'pseudo', 'my-pseudo');
    setFormInputValue(wrapper, 'password', 'my-password');
    setFormInputValue(wrapper, 'passwordConfirmation', 'my-password');
    triggerFormSubmit(wrapper);

    sinon.assert.calledOnce(onSubmitSpy);
  });

  it('does not trigger submit function if not all fields filled', () => {
    const onSubmitSpy = sinon.spy();
    const wrapper = mount(
      <Provider store={store}>
        <AccountCreationForm onSubmit={onSubmitSpy} />
      </Provider>
    );

    triggerFormSubmit(wrapper);

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
