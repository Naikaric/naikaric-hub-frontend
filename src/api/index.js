import axios from 'axios';

const request = async(type, callback, config) => {
    try {
        const res = await axios[type](...config);
        if(callback) callback(res);
    } catch (error) {
        if(callback) callback(error);
    }
};

const api = {
    user: {
        create: (data, callback) => request('post', callback,
            [`${process.env.REACT_APP_BACKEND_HOST}/api/user`, { data }]
        ),
        get: (accessToken, id, callback) => request('get', callback,
            [`${process.env.REACT_APP_BACKEND_HOST}/api/user/${id}`, { headers: { accessToken } }]
        ),
    },
    auth: {
        login: (data, callback) => request('post', callback,
            [`${process.env.REACT_APP_BACKEND_HOST}/api/auth/login`, { data }, { withCredentials: true }]
        ),
        refreshTokens: (fingerprint, callback) => request('post', callback,
            [`${process.env.REACT_APP_BACKEND_HOST}/api/auth/refreshTokens`, { fingerprint }, { withCredentials: true }]
        ),
        logout: (accessToken, callback) => request('get', callback,
            [`${process.env.REACT_APP_BACKEND_HOST}/api/auth/logout`, { headers: { accessToken }, withCredentials: true }]
        ),
    },
};

export default api;