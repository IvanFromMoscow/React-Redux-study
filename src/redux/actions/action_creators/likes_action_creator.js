import { ADD_LIKE, REMOVE_LIKE } from '../action_types/action_types'

export const addLike = () => {
    return {
        type: ADD_LIKE
    }
};

export const removeLike = () => {
    return {
        type: REMOVE_LIKE
    }
};