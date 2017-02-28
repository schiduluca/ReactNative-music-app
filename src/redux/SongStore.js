import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from "./Reducer";
import helloSaga from './sagas/HelloSaga'


const sagaMiddleware = createSagaMiddleware();

export default songStore = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(helloSaga);

export const action = type => songStore.dispatch({type});
