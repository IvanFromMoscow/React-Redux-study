import { ADD_LIKE, REMOVE_LIKE } from "../actions/action_types/action_types";


const initialState = {
    likes: 0
};

export const  likesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_LIKE:
            return {...state, likes: state.likes < 0 ? 0 : state.likes + 1};
        case REMOVE_LIKE:
            return {...state, likes: state.likes > 0 ? state.likes -1: 0}
        default:
            return state; 
    }
}
