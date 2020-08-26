import * as types from "../types";

export const setNotes = (notes) => ({
  type: types.SET_NOTES,
  payload: notes,
});
