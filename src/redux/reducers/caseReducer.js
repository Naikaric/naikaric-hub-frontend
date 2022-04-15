import { SET_ALL_CASES, SET_CURRENT_CASE } from "../actions/caseActions";

export const initialState = {
    list: null,
    currentCase: null,
};

export function caseReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_CASES:
            return { ...state, list: action.payload };

        case SET_CURRENT_CASE:
            return { ...state, currentCase: action.payload };
    
        default:
            return state;
    }
};