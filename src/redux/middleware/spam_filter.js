import { errorOn } from "../actions/action_creators/error_action_creator";
import { COMMENT_CREATE } from "../actions/action_types/action_types"
const badWords = ['fuck', 'ass'];  

export const spamFilter = (store) => {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                const { text } = action.payload;
                const hasbadWords = badWords.some(w => text.includes(w));
                if (hasbadWords) {
                    return store.dispatch(errorOn('Bad Words!!!!!'));
                }
            }
            return next(action);
        }
    }
}