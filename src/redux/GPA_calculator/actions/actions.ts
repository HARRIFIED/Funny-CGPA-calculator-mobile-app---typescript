import { ActionTypes } from './actionTypes'
interface get_gpa {
    type: ActionTypes.GET_GPA;
    payload: any
}

export function getGpa(result:string):get_gpa {
    return {
        type: ActionTypes.GET_GPA,
        payload: result
    };
}

interface increase_input {
    type: ActionTypes.INCREASE_INPUT;
    payload?: any
}

export function increaseInput(textSpace: any):increase_input {
    return {
        type: ActionTypes.INCREASE_INPUT,
        payload: textSpace
    };
}


interface decrease_input {
    type: ActionTypes.DECREASE_INPUT;
    payload?: any
}

export function decreaseInput():decrease_input {
    return {
        type: ActionTypes.DECREASE_INPUT,
    };
}

export type Action = get_gpa | increase_input | decrease_input 