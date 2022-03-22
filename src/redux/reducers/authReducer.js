import { SET_ACCESS_TOKEN, SET_FINGERPRINT, SET_PERSON, SET_REFRESH_TOKENS_FUNC, SET_AUTHORIZED_REQUEST_FUNC } from '../actions/authActions';

export const initialState = {
    accessToken: null,
    fingerprint: null,
    person: null,
    refreshTokens: null,
    authorizedRequest: null,
};

export function authReducer(state =  initialState, action) {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload };

        case SET_FINGERPRINT:
            return { ...state, fingerprint: action.payload };

        case SET_PERSON:
            return { ...state, person: action.payload };

        case SET_REFRESH_TOKENS_FUNC:
            return { ...state, refreshTokens: action.payload };

        case SET_AUTHORIZED_REQUEST_FUNC:
            return { ...state, authorizedRequest: action.payload };
    
        default:
            return state;
    }
};