import { createStore, applyMiddleware } from 'redux';
// redux logger catches action, logs it out for us and moves it along usually greate for debugging redux
import logger from 'redux-logger';

import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer';


// logger expects an array
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}


// to actually make store, gets rootReducer and applymiddleware(spread in middlewares)
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor };
