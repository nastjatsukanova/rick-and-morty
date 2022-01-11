import { SAVE_DATA, CHANGE_INPUT_VALUE, FILTER } from "../constants";

const initialState = { data: [], inputValue: "", filter: "character" };
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SAVE_DATA:
      return {
        ...state,
        data: action.payload,
        inputValue: "",
      };
    default:
      return state;
  }
};
