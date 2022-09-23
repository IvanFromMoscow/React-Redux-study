import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE } from "../action_types/action_types";

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