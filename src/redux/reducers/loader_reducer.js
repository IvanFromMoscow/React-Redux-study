import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "../actions/action_types/action_types";


const initialState = {
    loading: true
};

export const loaderReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADER_DISPLAY_OFF:
           return {...state, loading: false}
        case LOADER_DISPLAY_ON:
            return {...state, loading: true}
        default:
            return state; 
    }
}
