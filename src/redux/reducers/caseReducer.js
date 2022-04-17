import { SET_ALL_CASES, ADD_OPENED_CASE } from "../actions/caseActions";

export const initialState = {
    list: null,
    openedCases: {},
};

export function caseReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_CASES:
            return { ...state, list: action.payload };

        case ADD_OPENED_CASE:
            const newOpenedCases = JSON.parse(JSON.stringify(state.openedCases));
            newOpenedCases[action.payload.id] = {};
            newOpenedCases[action.payload.id] = action.payload.case;
            return { ...state, openedCases: newOpenedCases };
    
        default:
            return state;
    }
};