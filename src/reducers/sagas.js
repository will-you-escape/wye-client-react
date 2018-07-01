import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCreateAccount } from '../api/user';

// worker Saga: will be fired on ACCOUNT_CREATION_REQUESTED actions
function* createAccount(action) {
  try {
    const account = yield call(apiCreateAccount, action.payload.data);
    yield put({ type: 'ACCOUNT_CREATION_SUCCEEDED', account: account });
  } catch (e) {
    yield put({ type: 'ACCOUNT_CREATION_FAILED', message: e.message });
  }
}

/*
  Does not allow concurrent account creation. If "ACCOUNT_CREATION_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* wyeSaga() {
  yield takeLatest('ACCOUNT_CREATION_REQUESTED', createAccount);
}

export default wyeSaga;
