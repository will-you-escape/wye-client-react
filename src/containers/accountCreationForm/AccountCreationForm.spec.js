import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';

import AccountCreationForm from './AccountCreationForm';

describe('<AccountCreationForm/>', () => {
  it('renders default AccountCreationForm', () => {
    const wrapper = mount(givenDefaultAccountCreationForm());
    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find('form input')).to.have.length(4);
  });
});

export function givenDefaultAccountCreationForm() {
  const onAccountCreationSuccess = () => alert('Account creation successful');
  return (
    <AccountCreationForm onAccountCreationSuccess={onAccountCreationSuccess} />
  );
}
