import { ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF } from "../action_types/action_types";

export const errorOn = (text) => {
    return dispatch => {
            dispatch({
                type: ERROR_DISPLAY_ON,
                payload: { text }
            });
            setTimeout(() => {
                dispatch(errorOff());
            }, 3000)
    }
}

export const errorOff = () => {
    return {
        type: ERROR_DISPLAY_OFF,
        payload: null
    }
}