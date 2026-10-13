import * as types from "../types";
import type { Amount } from "../types";

export const setGrossTips = (grossTips: Amount) => ({
  type: types.SET_GROSS_TIPS,
  payload: grossTips,
});

export const setAmTips = (amTips: Amount) => ({
  type: types.SET_AM_TIPS,
  payload: amTips,
});

export const setPmTips = (pmTips: Amount) => ({
  type: types.SET_PM_TIPS,
  payload: pmTips,
});

export const setCashTips = (cashTips: Amount) => ({
  type: types.SET_CASH_TIPS,
  payload: cashTips,
});

export const setTotalTips = (totalTips: Amount) => ({
  type: types.SET_TOTAL_TIPS,
  payload: totalTips,
});

export const setCashOwed = (cashOwed: Amount) => ({
  type: types.SET_CASH_OWED,
  payload: cashOwed,
});

export const setPettyCash = (pettyCash: Amount) => ({
  type: types.SET_PETTY_CASH,
  payload: pettyCash,
});

export const setOverUnder = (overUnder: Amount) => ({
  type: types.SET_OVER_UNDER,
  payload: overUnder,
});

export const setDrawCount = (drawCount: boolean) => ({
  type: types.SET_DRAW_COUNT,
  payload: drawCount,
});
