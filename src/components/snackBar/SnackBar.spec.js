import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { wyeCreateStore } from '../../store';
import SnackBar from './SnackBar';

describe('<SnackBar/>', () => {
  it('renders SnackBar when notification', () => {
    const initialState = {
      snackBar: {
        shouldDisplay: true,
        content: {
          title: 'Internal server error',
          message:
            'An internal server error occured. Please retry again later.',
          severity: 'error'
        }
      }
    };
    let store = wyeCreateStore(initialState);
    const wrapper = mount(givenDefaultSnackBar(store));

    const snackBarArea = findSnackBarArea(wrapper);
    expect(snackBarArea.text()).to.have.string('Internal server error');
    expect(snackBarArea.text()).to.have.string(
      'An internal server error occured. Please retry again later.'
    );
  });

  function findSnackBarArea(wrapper) {
    return wrapper.find('.snackbar');
  }
});

export function givenDefaultSnackBar(store) {
  return (
    <Provider store={store}>
      <SnackBar />
    </Provider>
  );
}
