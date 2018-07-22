import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCreateAccount } from '../api/user';
import { apiLogInUser } from '../api/logUser';

function* createAccount(action) {
  yield put({ type: 'ACCOUNT_CREATION [pending]' });
  try {
    const account = yield call(apiCreateAccount, action.payload);
    yield put({ type: 'ACCOUNT_CREATION [succeeded]', account: account });
  } catch (e) {
    yield put({ type: 'ACCOUNT_CREATION [failed]', message: e.message });
  }
}

function* logInUser(action) {
  yield put({ type: 'LOG_IN_USER [pending]' });
  try {
    const user = yield call(apiLogInUser, action.payload);
    yield put({ type: 'LOG_IN_USER [succeeded]', user: user });
  } catch (e) {
    yield put({ type: 'LOG_IN_USER [failed]', message: e.message });
  }
}

function* wyeSaga() {
  yield takeLatest('ACCOUNT_CREATION', createAccount);
  yield takeLatest('LOG_IN_USER', logInUser);
}

export default wyeSaga;
