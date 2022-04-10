import { ActionTypes } from '../actions/actionTypes';
import { Action } from '../actions/actions';

export const GPA_REDUCER = 'gpaReducer';

let num = 2

const initialState = {
    textSpace: [
        {
            id: 1,
            COURSE: "",
            GRADE: "",
            CREDIT:""
        },
        {
            id: num++,
            COURSE: "",
            GRADE: "",
            CREDIT:""
        }
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
                textSpace: [...(state.textSpace), {
                    id: num++,
                    COURSE: "",
                    GRADE: "",
                    CREDIT: ""
                }]
            }
        
        case ActionTypes.DECREASE_INPUT:
            return {
                ...state,
                
            }

        case ActionTypes.LOAD_SCREEN:
            return {
                ...state,
                ...payload,
                textSpace: (state.textSpace).map(value => {
                    value.COURSE = value.COURSE.concat(action.payload)
                    value.GRADE = value.GRADE.concat(action.payload)
                    value.CREDIT = value.CREDIT.concat(action.payload)
                })
            }

        default:
            return state
    }
}