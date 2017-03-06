import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers/Reducer";
import sagas from './sagas'


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducer,
            applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(sagas)
    };
};

export default configureStore;