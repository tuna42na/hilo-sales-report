import * as types from "../types";

export const setTab = (tab) => ({
  type: types.SET_TAB,
  payload: tab,
});

export const setManager = (manager) => ({
  type: types.SET_MANAGER,
  payload: manager,
});
