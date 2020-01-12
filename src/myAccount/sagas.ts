import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";

import { apiCreateEscapeRoomSession } from "../api/escapeRoomSession";

export function* createEscapeRoomSession(action: AnyAction) {
  yield put({ type: "ESCAPE_ROOM_SESSION_CREATION [pending]" });
  try {
    const account = yield call(apiCreateEscapeRoomSession, action.payload);
    yield put({
      type: "ESCAPE_ROOM_SESSION_CREATION [succeeded]",
      account: account
    });
  } catch (e) {
    yield put({
      type: "ESCAPE_ROOM_SESSION_CREATION [failed]",
      message: e.message
    });
    yield put({
      type: "SNACKBAR_OPEN",
      payload: {
        title: "API Server communication error",
        message:
          "An error happened when trying to create your account. Please retry again later. " +
          e.message,
        severity: "error"
      }
    });
  }
}
