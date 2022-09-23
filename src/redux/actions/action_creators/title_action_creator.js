import { INPUT_TEXT } from "../action_types/action_types";

export const inputText = (text) => {
    return {
        type: INPUT_TEXT,
        payload: text
    }
}
