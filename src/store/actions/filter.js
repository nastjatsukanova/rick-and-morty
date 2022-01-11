import { FILTER } from "../constants";

export const filter = (option) => {
  return {
    type: FILTER,
    payload: option,
  };
};
