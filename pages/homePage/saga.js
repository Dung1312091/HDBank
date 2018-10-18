/* global fetch */
import { put, takeLatest } from "redux-saga/effects";
import { loadDataSuccess, failure } from "./action";
import { LOAD_DATA_USER, LOAD_DATA_POST } from "../../constants/actionTypes";
import { loadFakeDataPost, loadFakeDataUser } from "../../api/demo";

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
export function* watchSagaHomePage() {
  yield takeLatest(LOAD_DATA_USER, loadDataSagaUser);
  yield takeLatest(LOAD_DATA_POST, loadDataSagaPost);
}
