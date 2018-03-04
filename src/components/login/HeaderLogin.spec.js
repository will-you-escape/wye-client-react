import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import HeaderLogin from './HeaderLogin';
import Overlay from '../Overlay';

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
    expect(findOverlay(wrapper)).to.have.length(0);
  });

  function findLoginMessage(wrapper) {
    return wrapper.find('.header__login--message');
  }

  function findOverlay(wrapper) {
    return wrapper.find(Overlay);
  }
});

export function givenDefaultHeaderLogin() {
  return <HeaderLogin />;
}
