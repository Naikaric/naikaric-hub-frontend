export const getPayloadToken = token => {
    return JSON.parse(atob(token.split('.')[1]));
};

export const checkIsExpiredToken = token => {
    return getPayloadToken(token).exp*1000 - new Date().getTime() < 60*1000;
};