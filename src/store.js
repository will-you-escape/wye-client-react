import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import wyeReducers from './reducers/index';
import wyeSaga from './reducers/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

export function wyeCreateStore(initialState = undefined) {
  const store = createStore(wyeReducers, initialState, enhancers);
  sagaMiddleware.run(wyeSaga);

  return store;
}
