export const SET_ALL_CASES = 'SET_ALL_CASES';
export const SET_CURRENT_CASE = 'SET_CURRENT_CASE';

export const setAllCases = cases => {
    return {
        type: SET_ALL_CASES,
        payload: cases,
    };
};

export const setCurrentCase = workCase => {
    return {
        type: SET_CURRENT_CASE,
        payload: workCase,
    };
};