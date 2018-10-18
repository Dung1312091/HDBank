import { all } from "redux-saga/effects";
import { watchSagaHomePage } from "../pages/homePage/saga";
export default function* rootSaga() {
  yield all([watchSagaHomePage()]);
}
