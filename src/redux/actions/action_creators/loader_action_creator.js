import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "../action_types/action_types";

export const loaderOn = () => {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export const loaderOff = () => {
    return {
        type: LOADER_DISPLAY_OFF
    }
}