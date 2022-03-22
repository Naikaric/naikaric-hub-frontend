export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const SET_FINGERPRINT = 'SET_FINGERPRINT';
export const SET_PERSON = 'SET_PERSON';
export const SET_REFRESH_TOKENS_FUNC = 'SET_REFRESH_TOKENS_FUNC';
export const SET_AUTHORIZED_REQUEST_FUNC = 'SET_AUTHORIZED_REQUEST_FUNC';

export const setAccessToken = token => {
    return {
        type: SET_ACCESS_TOKEN,
        payload: token,
    };
};

export const setFingerprint = fingerprint => {
    return {
        type: SET_FINGERPRINT,
        payload: fingerprint,
    };
};

export const setPerson = data => {
    return {
        type: SET_PERSON,
        payload: data,
    };
};

export const setRefreshTokensFunc = func => {
    return {
        type: SET_REFRESH_TOKENS_FUNC,
        payload: func,
    };
};

export const setAuthorizedRequestFunc = func => {
    return {
        type: SET_AUTHORIZED_REQUEST_FUNC,
        payload: func,
    };
};