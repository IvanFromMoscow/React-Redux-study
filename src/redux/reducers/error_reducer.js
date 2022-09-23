import { ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON } from "../actions/action_types/action_types";


const initialState = {
    error: null
};

export const errorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ERROR_DISPLAY_OFF:
           return {...state, error: null}
        case ERROR_DISPLAY_ON:
            return {...state, error: action.payload.text}
        default:
            return state; 
    }
}
