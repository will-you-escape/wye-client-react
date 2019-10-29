import _ from "lodash";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import wyeReducers from "./reducers/index";
import wyeSaga from "./reducers/sagas";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger({
    // Removes redux-form actions to avoid polluting the middleware output
    predicate: (getState, action) => !_.includes(action.type, "@@redux-form")
  });
  middlewares.push(logger);
}

const enhancers = composeEnhancers(applyMiddleware(...middlewares));

export function wyeCreateStore(initialState = undefined) {
  const store = createStore(wyeReducers, initialState, enhancers);
  sagaMiddleware.run(wyeSaga);

  return store;
}
