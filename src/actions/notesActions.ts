import * as types from "../types";

export const setNotes = (notes: string) => ({
  type: types.SET_NOTES,
  payload: notes,
});
