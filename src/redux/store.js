import { createStore, applyMiddleware } from 'redux';
// redux logger catches action, logs it out for us and moves it along usually greate for debugging redux
import logger from 'redux-logger';


import rootReducer from './root-reducer';


// logger expects an array
const middlewares = [logger];


// to actually make store, gets rootReducer and applymiddleware(spread in middlewares)
const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store;


