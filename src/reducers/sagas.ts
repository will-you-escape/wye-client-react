import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCreateAccount } from '../api/user';
import { apiLogInUser, apiLogOutUser } from '../api/logUser';
import { apiWhoAmI } from '../api/whoami';

const HTTP_SUCCESS_STATUS_CODE = 200;
const HTTP_UNAUTHORIZED_STATUS_CODE = 401;

export function* initApp(action) {
  yield put({ type: 'INIT_APP [pending]' });
  try {
    const response = yield call(apiWhoAmI);
    const responseStatus = response.status;
    if (responseStatus === HTTP_UNAUTHORIZED_STATUS_CODE) {
      yield put({ type: 'API_LOGGED_OUT' });
    } else if (responseStatus === HTTP_SUCCESS_STATUS_CODE) {
      yield put({ type: 'API_LOGGED_IN' });
    }
    yield put({ type: 'INIT_APP [succeeded]' });
  } catch (e) {
    yield put({ type: 'INIT_APP [failed]', message: e.message });
    yield put({
      type: 'SNACKBAR_OPEN',
      payload: {
        title: 'API Server communication error',
        message:
          'An error happened when trying to create your account. Please retry again later.',
        severity: 'error'
      }
    });
  }
}

function* createAccount(action) {
  yield put({ type: 'ACCOUNT_CREATION [pending]' });
  try {
    const account = yield call(apiCreateAccount, action.payload);
    yield put({ type: 'ACCOUNT_CREATION [succeeded]', account: account });
  } catch (e) {
    yield put({ type: 'ACCOUNT_CREATION [failed]', message: e.message });
    yield put({
      type: 'SNACKBAR_OPEN',
      payload: {
        title: 'API Server communication error',
        message:
          'An error happened when trying to create your account. Please retry again later. ' +
          e.message,
        severity: 'error'
      }
    });
  }
}

function* logInUser(action) {
  yield put({ type: 'LOG_IN_USER [pending]' });
  try {
    const user = yield call(apiLogInUser, action.payload);
    yield put({ type: 'LOG_IN_USER [succeeded]', user: user });
  } catch (e) {
    yield put({ type: 'LOG_IN_USER [failed]', message: e.message });
    yield put({
      type: 'SNACKBAR_OPEN',
      payload: {
        title: 'API Server communication error',
        message:
          'An error happened when trying to log you in. Please retry again later.',
        severity: 'error'
      }
    });
  }
}

function* logOutUser(action) {
  yield put({ type: 'LOG_OUT_USER [pending]' });
  try {
    const response = yield call(apiLogOutUser);
    const responseStatus = response.status;
    if (responseStatus === HTTP_UNAUTHORIZED_STATUS_CODE) {
      yield put({ type: 'API_LOGGED_OUT' });
    } else if (responseStatus === HTTP_SUCCESS_STATUS_CODE) {
      yield put({ type: 'API_LOGGED_OUT' });
    }
    yield put({ type: 'LOG_OUT_USER [succeeded]' });
  } catch (e) {
    yield put({ type: 'LOG_OUT_USER [failed]', message: e.message });
  }
}

function* wyeSaga() {
  yield takeLatest('INIT_APP', initApp);
  yield takeLatest('ACCOUNT_CREATION', createAccount);
  yield takeLatest('LOG_IN_USER', logInUser);
  yield takeLatest('LOG_OUT_USER', logOutUser);
}

export default wyeSaga;