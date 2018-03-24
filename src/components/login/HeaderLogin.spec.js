import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import HeaderLogin from './HeaderLogin';
import Overlay from '../overlay/Overlay';
import Button from '../Button';

describe('<HeaderLogin/>', () => {
  it('renders default HeaderLogin', () => {
    const wrapper = mount(givenDefaultHeaderLogin());
  });

  it('displays header login message', () => {
    const wrapper = mount(givenDefaultHeaderLogin());
    expect(findLoginMessage(wrapper).text()).to.equal(
      'Already have an account?'
    );
  });

  it('does not display overlay by default', () => {
    const wrapper = mount(givenDefaultHeaderLogin());
    expect(findOverlay(wrapper).prop('displayOverlay')).to.equal(false);
  });

  it('displays overlay after click', () => {
    const wrapper = mount(givenDefaultHeaderLogin());
    const button = findLoginButton(wrapper);
    button.simulate('click');
    expect(findOverlay(wrapper)).to.have.length(1);
  });

  function findLoginMessage(wrapper) {
    return wrapper.find('.header__login--message');
  }

  function findLoginButton(wrapper) {
    return wrapper.find(Button);
  }

  function findOverlay(wrapper) {
    return wrapper.find(Overlay);
  }
});

export function givenDefaultHeaderLogin() {
  const onLoginSuccess = () => alert('Login successful');
  return <HeaderLogin onLoginSuccess={onLoginSuccess} />;
}
