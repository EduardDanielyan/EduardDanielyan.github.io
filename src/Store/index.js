import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import  logReducer from "./reducer";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware()
export const store = legacy_createStore(logReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)