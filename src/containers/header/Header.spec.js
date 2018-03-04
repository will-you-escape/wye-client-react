import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Header from './Header';

describe('<Header/>', () => {
  it('renders default Header', () => {
    const wrapper = mount(givenDefaultHeader());
  });
});

export function givenDefaultHeader() {
  return <Header />;
}
