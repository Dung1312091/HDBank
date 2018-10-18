import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
}

export default configureStore;
