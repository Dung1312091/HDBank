import { all } from 'redux-saga/effects';
import { watchDemoSaga } from '../saga/sagaDemo';
export default function* rootSaga() {
    yield all([watchDemoSaga()])
}
