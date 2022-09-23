import { COMMENT_LOAD, COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE} from "../actions/action_types/action_types";

const initialState = {
   comments: [] 
}
export const commentReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case COMMENT_CREATE:
            return {...state, comments: [...state.comments, action.payload]}
        case COMMENT_UPDATE: {
            const { id } = action.payload;
            const updateIndex = state.comments.findIndex(comment => comment.id === id);
            return {...state, comments: [
                ...state.comments.slice(0, updateIndex),
                action.payload,
                ...state.comments.slice(updateIndex+1)
            ]}
        }
        case COMMENT_DELETE: {
            const id = action.payload;
            return {...state, comments: state.comments.filter(comment => comment.id !== id)}
        }
        case COMMENT_LOAD: {
            const data = action.payload;
            const comments = data.map(item => {
                return {
                    id: item.id,
                    text: item.name
                }
            });
            return {...state, comments}
        }
        default: 
            return state;
    }
}