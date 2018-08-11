import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import App from './App';
import { initApp } from './reducers/actions';
import * as APIProvider from './api/whoami';
import { wyeCreateStore } from './store';

describe('<App>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />);
  });

  describe('initialisation', () => {
    let sandbox = sinon.sandbox.create();

    afterEach(() => {
      sandbox.restore();
    });

    it('detects that user is logged if whoami successful on app loading', () => {
      sandbox.stub(APIProvider, 'apiWhoAmI').resolves({ status: 200 });

      let store = wyeCreateStore();
      store.dispatch(initApp());

      setTimeout(() => {
        expect(store.getState()['auth']['logged']).to.be.true;
      }, 0);
    });

    it('detects that user is not logged if whoami unauthorised on app loading', () => {
      sandbox.stub(APIProvider, 'apiWhoAmI').resolves({ status: 401 });

      let store = wyeCreateStore();
      store.dispatch(initApp());

      setTimeout(() => {
        expect(store.getState()['auth']['logged']).to.be.false;
      }, 0);
    });

    it('detects that user is not logged if api error on app loading', () => {
      sandbox.stub(APIProvider, 'apiWhoAmI').resolves({ status: 500 });

      let store = wyeCreateStore();
      store.dispatch(initApp());

      setTimeout(() => {
        expect(store.getState()['auth']['logged']).to.be.false;
      }, 0);
    });
  });
});
