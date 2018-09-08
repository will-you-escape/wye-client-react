import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCreateAccount } from '../api/user';
import { apiLogInUser, apiLogOutUser } from '../api/logUser';
import { apiWhoAmI } from '../api/whoami';

const HTTP_SUCCESS_STATUS_CODE = 200;
const HTTP_UNAUTHORIZED_STATUS_CODE = 401;

function* initApp(action) {
  yield put({ type: 'INIT_APP [pending]' });
  try {
    yield privateApiCall(apiWhoAmI);
    yield put({ type: 'INIT_APP [succeeded]' });
  } catch (e) {
    yield put({ type: 'INIT_APP [failed]', message: e.message });
  }
}

function* createAccount(action) {
  yield put({ type: 'ACCOUNT_CREATION [pending]' });
  try {
    const account = yield publicApiCall(apiCreateAccount, action.payload);
    yield put({ type: 'API_LOGGED_IN' });
    yield put({ type: 'ACCOUNT_CREATION [succeeded]', account: account });
  } catch (e) {
    yield put({ type: 'ACCOUNT_CREATION [failed]', message: e.message });
  }
}

function* logInUser(action) {
  yield put({ type: 'LOG_IN_USER [pending]' });
  try {
    const user = yield publicApiCall(apiLogInUser, action.payload);
    yield put({ type: 'API_LOGGED_IN' });
    yield put({ type: 'LOG_IN_USER [succeeded]', user: user });
  } catch (e) {
    yield put({ type: 'LOG_IN_USER [failed]', message: e.message });
  }
}

function* logOutUser(action) {
  yield put({ type: 'LOG_OUT_USER [pending]' });
  try {
    yield privateApiCall(apiLogOutUser);
    yield put({ type: 'API_LOGGED_OUT' });
    yield put({ type: 'LOG_OUT_USER [succeeded]' });
  } catch (e) {
    yield put({ type: 'LOG_OUT_USER [failed]', message: e.message });
  }
}

function* apiCall(...fn) {
  let response;
  try {
    response = yield call(...fn);
  } catch (e) {
    const message = e.message;
    yield put({
      type: 'SNACKBAR_OPEN',
      payload: {
        title: 'API Server communication error',
        message: `An error happened when trying to create your account. Please retry again later. (${message})`,
        severity: 'error'
      }
    });
    throw e;
  }
  const responseStatus = response.status;
  if (responseStatus === HTTP_UNAUTHORIZED_STATUS_CODE) {
    yield put({ type: 'API_LOGGED_OUT' });
  }
  return yield response;
}

function* privateApiCall(...fn) {
  const response = yield apiCall(...fn);
  const responseStatus = response.status;
  if (responseStatus === HTTP_SUCCESS_STATUS_CODE) {
    yield put({ type: 'API_LOGGED_IN' });
  }
  return yield response;
}

function* publicApiCall(...fn) {
  return yield apiCall(...fn);
}

function* wyeSaga() {
  yield takeLatest('INIT_APP', initApp);
  yield takeLatest('ACCOUNT_CREATION', createAccount);
  yield takeLatest('LOG_IN_USER', logInUser);
  yield takeLatest('LOG_OUT_USER', logOutUser);
}

export default wyeSaga;
