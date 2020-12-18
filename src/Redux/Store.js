import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import{applyMiddleware,createStore,compose} from 'redux'; 

import combineReducers from './Reducers';
const middlewares =[thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(
    combineReducers,
    compose(applyMiddleware(...middlewares)),
);

const getStore = () => store;
const getState = () => store.getState();

export {getStore,getState};