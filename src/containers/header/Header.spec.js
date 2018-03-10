import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Header from './Header';
import Logo from '../../components/logo/Logo';
import HeaderLogin from '../../components/login/HeaderLogin';

describe('<Header/>', () => {
  it('renders default Header', () => {
    const wrapper = mount(givenDefaultHeader());
  });

  it('contains WYE Logo', () => {
    const wrapper = mount(givenDefaultHeader());
    expect(findWYELogo(wrapper)).to.have.length(1);
  });

  it('contains login area', () => {
    const wrapper = mount(givenDefaultHeader());
    expect(findLoginArea(wrapper)).to.have.length(1);
  });

  function findWYELogo(wrapper) {
    return wrapper.find(Logo);
  }

  function findLoginArea(wrapper) {
    return wrapper.find(HeaderLogin);
  }
});

export function givenDefaultHeader() {
  return <Header />;
}
