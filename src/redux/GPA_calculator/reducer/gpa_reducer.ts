import { ActionTypes } from '../actions/actionTypes';
import { Action } from '../actions/actions';

export const GPA_REDUCER = 'gpaReducer';

const initialState = {
    textSpace: [
        {COURSE: "", GRADE: "", CREDIT: "" },
        {COURSE: "", GRADE: "", CREDIT: "" },
    ],
    
    result: ""
}


export function gpaReducer(state = initialState, action: Action) {
    let { type, payload } = action;

    switch (type) {
        case ActionTypes.INCREASE_INPUT:
            return {
                ...state,
                ...payload,
                textspace: (state.textSpace).push({COURSE: "", GRADE: "", CREDIT: "" })
            }
        
        case ActionTypes.DECREASE_INPUT:
            return {
                ...state,
                ...payload,
                textspace:
                    (state.textSpace).length <= 2 ? 
                        (state.textSpace) : (state.textSpace).pop()
            }
        
        default:
            return state
    }
}