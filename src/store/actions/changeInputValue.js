import { CHANGE_INPUT_VALUE } from "../constants";

export const changeInputValue = (text) => {
    return {
        type: CHANGE_INPUT_VALUE, 
        payload: text,
    }
}