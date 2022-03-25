import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const middlewares = [thunk];

const { logger } =  require('redux-logger');

middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));