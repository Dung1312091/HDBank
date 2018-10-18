/* global fetch */
import { put, takeLatest } from "redux-saga/effects";
import { actionTypes, failure, loadDataSuccess } from "../actions/actionDemo";
import { loadFakeDataPost, loadFakeDataUser } from "../api/demo";

function* loadDataSagaUser() {
  try {
    const data = yield loadFakeDataUser();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}
function* loadDataSagaPost() {
  try {
    const data = yield loadFakeDataPost();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}
export function* watchDemoSaga() {
  yield takeLatest(actionTypes.LOAD_DATA_USER, loadDataSagaUser);
  yield takeLatest(actionTypes.LOAD_DATA_POST, loadDataSagaPost);
}
