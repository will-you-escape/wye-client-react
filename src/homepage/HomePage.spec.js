import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import HomePageConnected from './HomePage';
import { HomePage } from './HomePage';
import HeaderLogin from '../components/login/HeaderLogin';

import { wyeCreateStore } from '../store';

describe('<HomePage/>', () => {
  describe('not logged', () => {
    it('contains login area', () => {
      const wrapper = mount(givenDefaultHomePage());
      expect(findLoginArea(wrapper)).to.have.length(1);
    });

    it('contains WYE Homepage title', () => {
      const wrapper = mount(givenDefaultHomePage());
      expect(wrapper.text()).to.contain('Your Escape Game Space');
    });

    function findLoginArea(wrapper) {
      return wrapper.find(HeaderLogin);
    }
  });
});

describe('<HomePage/> connected', () => {
  describe('passes loggedIn argument from the store', () => {
    it('if not logged', () => {
      const initialState = {};
      const store = wyeCreateStore({
        auth: {
          logged: false
        }
      });
      const wrapper = mount(<HomePageConnected store={store} />);
      expect(findHomePage(wrapper).prop('loggedIn')).to.be.false;
    });

    it('if logged', () => {
      const store = wyeCreateStore({
        auth: {
          logged: true
        }
      });
      const wrapper = mount(<HomePageConnected store={store} />);
      expect(findHomePage(wrapper).prop('loggedIn')).to.be.true;
    });
  });

  function findHomePage(wrapper) {
    return wrapper.find(HomePage);
  }
});

export function givenDefaultHomePage() {
  return <HomePage loggedIn={false} />;
}
