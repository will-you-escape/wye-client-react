import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import HomePage from './HomePage';
import HeaderLogin from '../components/login/HeaderLogin';

import { wyeCreateStore } from '../store';

describe('<HomePage/>', () => {
  describe('not logged', () => {
    it('contains login area', () => {
      const store = wyeCreateStore();
      const wrapper = mount(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      expect(findLoginArea(wrapper)).to.have.length(1);
    });

    it('contains WYE Homepage title', () => {
      const store = wyeCreateStore();
      const wrapper = mount(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      expect(wrapper.text()).to.contain('Your Escape Game Space');
    });

    function findLoginArea(wrapper) {
      return wrapper.find(HeaderLogin);
    }
  });
});

export function givenDefaultHomePage() {
  return <HomePage loggedIn={false} />;
}
