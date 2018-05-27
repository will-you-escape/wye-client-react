import { createStore } from 'redux';

import wyeReducers from './reducers/index';
import { DEBUG_TOOLS } from './debug';

export function wyeCreateStore(initialState = undefined) {
  return createStore(wyeReducers, initialState, DEBUG_TOOLS);
}
