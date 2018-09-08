import fetchMock from 'fetch-mock';

import runSaga from 'redux-saga';

import { initApp } from './actions';

describe('Sagas', () => {
  let env;

  beforeEach(() => {
    env = process.env;
    process.env.REACT_APP_SERVER_ROOT_URL = 'https://my.server.wye/';
  });

  afterEach(() => {
    fetchMock.restore();
    process.env = env;
  });

  xit('whoami successful triggers logged-in action', async () => {
    'TODO: FIX THIS TEST';
    fetchMock.post('https://my.server.wye/graphql/', {});

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ state: 'test' })
      },
      initApp
    ).done;
    expect(dispatched).to.equal([success({ some: 'value' })]);
  });
});
