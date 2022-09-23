import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_LOAD, COMMENT_UPDATE } from "../action_types/action_types";

export const createComment = (id, text) => {
    return {
        type: COMMENT_CREATE,
        payload: {id, text}
    }
}

export const updateComment = (id, text) => {
    return {
        type: COMMENT_UPDATE,
        payload: {id, text}
    }
}


export const deleteComment = (id) => {
    return {
        type: COMMENT_DELETE,
        payload: id
    }
}

export const loadComments = () => {
    return async dispatch => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(data => data.json());
        dispatch({
            type: COMMENT_LOAD,
            payload: data
        })
    }
}