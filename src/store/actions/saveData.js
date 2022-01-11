import { SAVE_DATA } from "../constants";

export const saveData = (id) => {
  return {
    type: SAVE_DATA,
    payload: id,
  };
};
