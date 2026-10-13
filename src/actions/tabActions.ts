import * as types from "../types";

export const setTab = (tab: number) => ({
  type: types.SET_TAB,
  payload: tab,
});

export const setManager = (manager: string) => ({
  type: types.SET_MANAGER,
  payload: manager,
});
