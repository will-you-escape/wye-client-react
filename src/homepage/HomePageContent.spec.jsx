import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import fetchMock from 'fetch-mock';

import HomePageContent from './HomePageContent';
import { wyeCreateStore } from '../store';
import {
  setFormInputValue,
  triggerFormSubmit
} from '../form/testHelpers/events';

describe('<HomePageContent/>', () => {
  let env;

  beforeEach(() => {
    env = process.env;
    process.env.REACT_APP_SERVER_ROOT_URL = 'https://my.server.wye/';
  });

  afterEach(() => {
    fetchMock.restore();
    process.env = env;
  });

  describe('account creation form', () => {
    it('send data to server when data is valid', () => {
      const store = wyeCreateStore();
      const wrapper = mount(
        <Provider store={store}>
          <HomePageContent />
        </Provider>
      );
      fetchMock.post('https://my.server.wye/graphql/', {});

      // Open the account creation form
      findSignupButton(wrapper).simulate('click');

      // Fill the form with valid data
      setFormInputValue(wrapper, 'email', 'my-email@wye.com');
      setFormInputValue(wrapper, 'pseudo', 'my-pseudo');
      setFormInputValue(wrapper, 'password', 'my-password');
      setFormInputValue(wrapper, 'passwordConfirmation', 'my-password');
      triggerFormSubmit(wrapper);

      const fetchCall = firstFetchCall();

      expect(fetchCall).not.to.be.undefined;
      expect(getFetchCallURL(fetchCall)).to.equal(
        'https://my.server.wye/graphql/'
      );
    });

    it('does not send data to server when data is not valid', () => {
      const store = wyeCreateStore();
      const wrapper = mount(
        <Provider store={store}>
          <HomePageContent />
        </Provider>
      );
      fetchMock.post('https://my.server.wye/graphql/', {});

      // Open the account creation form
      findSignupButton(wrapper).simulate('click');

      // Fill an incomplete form
      setFormInputValue(wrapper, 'email', 'my-email@wye.com');
      triggerFormSubmit(wrapper);

      const fetchCall = firstFetchCall();

      expect(fetchCall).to.be.undefined;
    });
  });

  function firstFetchCall() {
    return fetchMock.calls()[0];
  }

  function getFetchCallURL(mockedCall) {
    // Mocked fetch-mock calls are a tuple, first one being the URL called.
    return mockedCall[0];
  }

  function findSignupButton(wrapper) {
    return wrapper.find('.account__creation button');
  }
});

export function givenDefaultHomePageContent(store) {
  return <HomePageContent />;
}
