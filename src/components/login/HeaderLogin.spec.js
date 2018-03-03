import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import HeaderLogin from './HeaderLogin';

describe('<HeaderLogin/>', () => {
  it('renders default HeaderLogin', () => {
    const wrapper = mount(givenDefaultHeaderLogin());
    // console.log(wrapper);
    // expect(wrapper.find('form')).to.have.length(1);
    // expect(wrapper.find('form input')).to.have.length(2);
  });
});

export function givenDefaultHeaderLogin() {
  // const onLoginSuccess = () => alert('Login successful');
  return <HeaderLogin />;
}
