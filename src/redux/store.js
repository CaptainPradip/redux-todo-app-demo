
import { createStore, applyMiddleware } from 'redux';
import todoReducer from './todo/reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { compose } from 'redux';
const store  = createStore(
    todoReducer, compose(applyMiddleware(logger), composeWithDevTools())
);

export default store;