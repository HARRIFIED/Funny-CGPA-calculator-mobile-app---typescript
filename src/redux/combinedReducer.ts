import { combineReducers } from "redux";
import { gpaReducer, GPA_REDUCER } from './GPA_calculator/reducer/gpa_reducer';

export const rootReducer = combineReducers({
    [GPA_REDUCER]: gpaReducer,
})