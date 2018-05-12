import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import AccountCreation from './AccountCreation';
import Overlay from '../overlay/Overlay';
import Button from '../Button';

describe('<AccountCreation/>', () => {
  it('renders default AccountCreation', () => {
    const wrapper = mount(givenDefaultAccountCreation());
  });

  it('does not display overlay by default', () => {
    const wrapper = mount(givenDefaultAccountCreation());
    expect(findOverlay(wrapper).prop('displayOverlay')).to.equal(false);
  });

  it('displays overlay after click', () => {
    const wrapper = mount(givenDefaultAccountCreation());
    const button = findAccountCreationButton(wrapper);
    button.simulate('click');
    expect(findOverlay(wrapper)).to.have.length(1);
  });

  function findAccountCreationButton(wrapper) {
    return wrapper.find(Button);
  }

  function findOverlay(wrapper) {
    return wrapper.find(Overlay);
  }
});

export function givenDefaultAccountCreation() {
  const onAccountCreationSuccess = () => alert('Account Creation successful');
  return (
    <AccountCreation onAccountCreationSuccess={onAccountCreationSuccess} />
  );
}
