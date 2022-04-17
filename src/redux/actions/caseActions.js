export const SET_ALL_CASES = 'SET_ALL_CASES';
export const ADD_OPENED_CASE = 'ADD_OPENED_CASE';

export const setAllCases = cases => {
    return {
        type: SET_ALL_CASES,
        payload: cases,
    };
};

export const addOpenedCase = workCase => {
    return {
        type: ADD_OPENED_CASE,
        payload: workCase,
    };
};