import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from "./Reducer";


const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);