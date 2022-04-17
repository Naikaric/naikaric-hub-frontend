import { combineReducers  } from 'redux';

import { authReducer } from './authReducer';
import { caseReducer } from './caseReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    cases: caseReducer,
});