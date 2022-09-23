import { combineReducers } from "redux";
import { commentReducer } from "./comment_reducer";
import { likesReducer } from "./likes_reducer";
import { loaderReducer } from "./loader_reducer";
import { titleReducer } from "./title_reducer";



export const rootReducer = combineReducers({
    likesReducer,
    titleReducer,
    commentReducer,
    loaderReducer
});