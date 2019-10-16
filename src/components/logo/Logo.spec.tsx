import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Logo from './Logo';

describe('<Logo/>', () => {
  it('renders default Logo', () => {
    const wrapper = mount(givenDefaultLogo());
  });

  it('renders expected image Logo', () => {
    const wrapper = mount(givenDefaultLogo());
    expect(findImage(wrapper).prop('src')).to.equal('wye_logo.png');
  });

  function findImage(wrapper) {
    return wrapper.find('img');
  }
});

export function givenDefaultLogo() {
  return <Logo />;
}
